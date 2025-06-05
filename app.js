// This loads the settings from your `.env` file.
require("dotenv").config();
const express = require("express");
const db = require("./db/database");
const path = require("path");
const createError = require("http-errors");

const app = express();


const PORT = 3333;


app.use(express.static(path.join(__dirname, "public")));

////////////
// Routes //
////////////

const artisansRoutes = require ('./routes/artisans');


// The home page lists some available URLs.


app.get("/", (req, res) => {
    res.json({
        urls: {
            get_all: `localhost:${PORT}/artisans`,
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


// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};


    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));

module.exports = app;