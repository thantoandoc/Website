const express = require('express');
var admin = require('./admin');
var router = express.Router();

router.use('/',admin);

module.exports = router;