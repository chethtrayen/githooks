const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const gitRoutes = require('./git/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use('/git', gitRoutes);

module.exports = app;