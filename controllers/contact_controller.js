var express = require('express');
var router = express.Router();
var path = require('path');
var db = require("../models/contactme.js")

router.get('/', function(req, res) {
    res.render('contact');
});

module.exports = router;