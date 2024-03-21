const express = require('express');
const app = express();
const morgan = require('morgan');

module.exports = app;

app.use(require('./routes/index'));

app.use(morgan('dev'));