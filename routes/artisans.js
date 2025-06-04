const artisans = require ('../db/database');
const express = require ('express');
const router = express.Router();

router.get ('/artisans', artisans.getAllArtisans);

module.exports = router;