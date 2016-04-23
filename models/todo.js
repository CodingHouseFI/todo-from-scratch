'use strict';

var db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
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
  db.run('INSERT INTO todos (dueDate, desc) VALUES (?, ?)', todo.dueDate, todo.desc, cb);
};

