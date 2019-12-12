'use strict';
const express = require('express');
const router = express.Router();
const blankController = require('../js/registerController');

router.get('/', blankController.event_list_get);

module.exports = router;