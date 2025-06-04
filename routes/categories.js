const categories = require ('../db/database');
const express = require ('express');
const router = express.Router();

router.get ('/categories', categories.getAllCategories);

module.exports = router;