'use strict';
const express = require('express');
const router = express.Router();
const blankController = require('../js/blankController');

router.get('/', blankController.event_list_get);

module.exports = router;