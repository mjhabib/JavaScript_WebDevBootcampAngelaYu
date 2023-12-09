import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "thisisatest";
const yourPassword = "thisisatest";
const yourAPIKey = "6c12b627-7cf3-4a72-b298-3cd8ec014682";
const yourBearerToken = "Bearer 276cb5cb-e306-47c2-b4e9-0e729a575376";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});


app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "filter?score=5&apiKey=" + yourAPIKey);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "secrets/42", {
      headers: { 
        Authorization: yourBearerToken
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
