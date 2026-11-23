// Core
const express = require("express");

// App-Imports
const { createConnection } = require("./database/database");
// Express setup
const app = express();
const port = 3000;

// View engine and layouts
app.set("view engine", "ejs");

// Json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get("/", async (req, res) => {
	return res.render("index");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
