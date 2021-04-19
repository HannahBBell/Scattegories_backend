import { Client } from "pg";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

config(); //Read .env file lines as though they were env vars.

//Call this script with the environment variable LOCAL set if you want to connect to a local db (i.e. without SSL)
//Do not set the environment variable LOCAL if you want to connect to a heroku DB.

//For the ssl property of the DB connection config, use a value of...
// false - when connecting to a local DB
// { rejectUnauthorized: false } - when connecting to a heroku DB
const herokuSSLSetting = { rejectUnauthorized: false }
const sslSetting = process.env.LOCAL ? false : herokuSSLSetting
const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: sslSetting,
};

const app = express();

app.use(express.json()); //add body parser to each following route handler
app.use(cors()) //add CORS support to each following route handler

const client = new Client(dbConfig);
client.connect();

//get a random category
app.get("/category", async (req, res) => {
  const randomCategory = await client.query('SELECT category FROM categories ORDER BY RANDOM() LIMIT 1');
  res.json(randomCategory.rows);
});

//add a category
app.post("/category", async (req, res) => {
  const {category} = req.body;
  const addedCategory = await client.query('INSERT INTO categories (category) VALUES ($1) RETURNING *', [category]);
  res.json(addedCategory.rows);
});

//get all names from database
app.get("/names", async (req, res) => {
  const playerName = await client.query('SELECT player FROM players');
  res.json(playerName.rows);
});

//delete a name from a database
app.delete("/names/:name", async (req, res) => {
  const {name} = req.params;
  await client.query('DELETE FROM players WHERE name = $1', [name]);
  res.json("Player was removed");
});

//Start the server on the given port
const port = process.env.PORT;
if (!port) {
  throw 'Missing PORT environment variable.  Set it in .env file.';
}
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
