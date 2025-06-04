// This imports the mysql library
const mysql = require("mysql");


// Prepare to connect to MySQL with your secret environment variables
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
});

// by default limit it to 100 results
function getAllArtisans (){
    return new Promise ((resolve, reject) => {
        const sql = `SELECT * FROM artisan`;
        pool.query(sql, function (err, results, fields) {
            if (err) {
                return reject (err);
            }

            return resolve (results);
        });
    });
}



function getAllCategories () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT * FROM categorie`;
        pool.query(sql, function (err, results, fields) {
            if (err) {
                return reject (err);
            }

            return resolve(results);
        });
    });
}

function getAllSpecialites () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT * FROM specialite`;
        pool.query(sql, function (err, results, fields) {
            if (err) {
                return reject (err);
            }

            return resolve(results);
        });
    });
}

function getAllVilles () {
    return new Promise ((resolve, reject) => {
        const sql = `SELECT * FROM ville`;
        pool.query(sql, function (err, results, fields) {
            if (err) {
                return reject (err);
            }

            return resolve(results);
        });
    });
}

module.exports = {
    getAllArtisans,
    getAllCategories,
    getAllSpecialites,
    getAllVilles
};