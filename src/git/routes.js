const express = require('express');
const router = express.Router();
const requestHandler = require('../util/requestHandler');
const { merge } = require('./service');

router.post('/merge', requestHandler(merge));

module.exports = router;