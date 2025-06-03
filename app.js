// This loads the settings from your `.env` file.
require("dotenv").config();
const express = require("express");
const db = require("./db/database");

const app = express();


const PORT = 3333;


////////////
// Routes //
////////////


// The home page lists some available URLs.
app.get("/", (req, res) => {
    res.json({
        urls: {
            get_all: `localhost:${PORT}/api`,
            get_1: `localhost:${PORT}/api/1`,
            get_a_different_one: `localhost:${PORT}/api/2`,
            search: `localhost:${PORT}/search/beh`,
            search: `localhost:${PORT}/search/r`,
        },
    });
});


app.get("/artisans", (req, res) => {
    db.getAllArtisans()
        .then(data => res.json(data)) // if successful
        .catch(err => res.status(500).json(err)); // if error
});

app.get("/categories", (req, res) => {
    db.getAllCategories()
        .then(data => res.json(data)) // if successful
        .catch(err => res.status(500).json(err)); // if error
});

app.get("/specialites", (req, res) => {
    db.getAllSpecialites()
        .then(data => res.json(data)) // if successful
        .catch(err => res.status(500).json(err)); // if error
});

app.get("/villes", (req, res) => {
    db.getAllVilles()
        .then(data => res.json(data)) // if successful
        .catch(err => res.status(500).json(err)); // if error
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));