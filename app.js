let express = require('express');
let todoController = require('./todoController');
let app = express();


app.use('/todo', todoController);

module.exports = app;