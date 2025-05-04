const express = require('express');
const router = express.Router();
const { testController } = require('../contorller/test.controller');

router.get('/test-user', testController);

module.exports = { testRouter : router};