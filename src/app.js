const express = require('express');
const app = express();
const gitRoutes = require('./git/routes');

app.use('/git', gitRoutes);

module.exports = app;