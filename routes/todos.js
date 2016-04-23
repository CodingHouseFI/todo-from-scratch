'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('all the todos');
});

module.exports = router;
