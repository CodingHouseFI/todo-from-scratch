'use strict';

var db = require('../config/db');
var moment = require('moment');

db.run(`CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME,
          dueDate DATETIME,
          desc TEXT,
          isComplete BOOLEAN DEFAULT 0
        )`);

exports.get = function(cb) {
  db.all('SELECT * FROM todos', cb);
};

exports.create = function(todo, cb) {
  if(!todo.dueDate || !todo.desc) {
    return cb('Missing required field.')
  }
  
  var createdAt = moment().unix();
  var dueDate = moment(todo.dueDate).unix();

  db.run('INSERT INTO todos (createdAt, dueDate, desc) VALUES (?, ?, ?)',
    createdAt,
    dueDate,
    todo.desc,
    cb);
};

