const specialite = require ('../db/database');
const express = require ('express');
const router = express.Router();

router.get ('/specialites', specialite.getAllSpecialites);

module.exports = router;