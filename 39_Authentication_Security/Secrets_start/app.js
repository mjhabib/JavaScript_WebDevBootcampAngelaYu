import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import GoogleStrategy from "passport-google-oauth20";

const app = express();
const port = 3000;

const db = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport-local
const authenticateUser = (username, password, done) => {
  db.query(
    `SELECT * FROM users WHERE mail = $1`,
    [username],
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results.rows.length > 0) {
        const user = results.rows[0];

        bcrypt.compare(password, user.pass, (err, isMatch) => {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            //password is incorrect
            return done(null, false);
          }
        });
      } else {
        // No user
        return done(null, false);
      }
    }
  );
};

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticateUser
  )
);
// End of Passport-local

// Passport Google-OAuth2.0
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
    },
    async (accessToken, refreshToken, profile, done) => {
      const userData = profile._json;
      let user = {};
      try {
        const result = await db.query("SELECT * FROM users WHERE gg_id = $1", [
          userData.sub,
        ]);
        if (result.rows.length > 0) {
          user = { user_id: result.rows[0].gg_id };
        } else {
          const newUser = await db.query(
            "INSERT INTO users (gg_id) VALUES ($1)",
            [userData.sub]
          );
          user = {
            user_id: newUser.rows[0].gg_id,
          };
        }
        done(null, user);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
// End of Passport Google-OAuth2.0

// Serialize & Deserialize Passport
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// All get requests
app.get("/", (req, res) => {
  res.render("home");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/secrets");
  }
);

app.get("/register", checkAuthenticated, (req, res) => {
  res.render("register");
});

app.get("/login", checkAuthenticated, (req, res) => {
  res.render("login", { message: "" });
});

app.get("/secrets", checkNotAuthenticated, async (req, res) => {
  try {
    let allSecrets = await db.query("SELECT secret FROM users_secrets");
    res.render("secrets", { foundSecrets: allSecrets.rows });

  } catch (error) {
    console.log(error);
  }

});

app.get("/submit", checkNotAuthenticated, (req, res) => {
  res.render("submit");
});

app.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// All post requests
app.post("/submit", checkNotAuthenticated, (req, res) => {
  res.render("submit");
  const submittedSecret = req.body.secret;

  try {
    db.query("INSERT INTO users_secrets (secret) VALUES ($1)", [
      submittedSecret,
    ]);
  } catch (error) {
    console.log(error);
  }
});

app.post("/register", async function (req, res) {
  const newMail = req.body.username;
  const newPass = req.body.password;

  // Encryption
  bcrypt.hash(newPass, 10, async function (err, hash) {
    try {
      await db.query("INSERT INTO users (mail, pass) VALUES ($1, $2)", [
        newMail,
        hash,
      ]);
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }),
  async function (req, res) {
    const exUser = req.body.username;
    const exPass = req.body.password;

    try {
      let result = await db.query("SELECT mail, pass FROM users");

      const foundUser = result.rows.find((user) => user.mail == exUser);
      if (foundUser) {
        // Decryption
        bcrypt.compare(exPass, foundUser.pass, function (err, result) {
          if (result) {
            res.render("secrets");
          } else {
            res.render("login", { message: "Password is not correct!" });
          }
        });
      } else {
        res.render("login", { message: "Email is not correct!" });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/secrets");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});

// 6 Levels of security
// Level1: Authenticate users by a username/password
// Level2: Encrypt (hash) the passwords & Save sensitive data in .env
// Level3: NOT REQUIRED: Replace hash with MD5 with strong pass
// Level4: Salt and Hash passwords using 'bcrypt'
// Level5: Cookies and Sessions using 'passport' & 'express-session'
// Level6: Third party OAuth2.0 (Like Google, Facebook)
