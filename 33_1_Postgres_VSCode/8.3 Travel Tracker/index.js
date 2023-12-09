import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( "public" ) );

const db = new pg.Client( {
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "    ",
  port: 3500,
} );

db.connect();

var countries = [];


app.get( "/", async ( req, res ) =>
{

  const result1 = await db.query( "SELECT country_code FROM visited_countries" );
  result1.rows.forEach( ( country ) =>
  {
    countries.push( country.country_code );
  } );
  res.render( "index.ejs", { countries: countries, total: countries.length } );
} );


app.post( "/add", async ( req, res ) => {

  const result2 = await db.query( "SELECT country_name, country_code FROM countries" );

  result2.rows.forEach( ( country ) =>
  {
    if (
      req.body.country.toLowerCase().trim() ===
      country.country_name.toLowerCase()
    )
    {
      countries.push( country.country_code );

      const ctCode = country.country_code;
      // db.query( `INSERT INTO visited_countries (country_code) VALUES ${ctCode}` );

    console.log( countries );

    }
  } );
  res.render( "index.ejs", { countries: countries, total: countries.length } );
} );


app.listen( port, () =>
{
  console.log( `Server running on http://localhost:${ port }` );
} );


// Add country codes to the database