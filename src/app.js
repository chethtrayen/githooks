const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.end('You have reach this app');
})

module.exports = app;