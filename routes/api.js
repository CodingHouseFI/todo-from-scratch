'use strict';

var express = require('express');
var router = express.Router();

router.use('/todos', require('./todos'));

module.exports = router;
