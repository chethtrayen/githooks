const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('You have reach this app');
})

module.exports = app;