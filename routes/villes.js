const ville = require ('../db/database');
const express = require ('express');
const router = express.Router();

router.get ('/villes', ville.getAllVilles);

module.exports = router;