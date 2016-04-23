'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

//   /api/todos
router.route('/')
  .get((req, res) => {

    Todo.get((err, todos) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(todos);
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Todo.create(req.body, err => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send();
    });
  });

module.exports = router;
