import express from 'express';
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const d = new Date();
    var weekday = d.getDay();
    var today = '';
    var toDo = '';

    if (weekday === 6 || weekday === 0){
        today = 'weekend'
        toDo = 'rest'
    } else {
        today = 'weekday'
        toDo = 'work'
    };

    res.render("index.ejs", {day: today, what: toDo,});
});

// app.post('/day', function (req, res) {
//   res.render(__dirname + '/views/index.ejs', {day: today, what: toDo})
// })

app.listen(port, () => {
    console.log(`I'm all listening on port ${port}`);
});