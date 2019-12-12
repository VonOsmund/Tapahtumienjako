'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const eventController = require('../js/eventController');

router.get('/', eventController.event_list_get);

router.get('/:id', eventController.event_get);


router.post('/', upload.single('Image'), function (req, res, next) {
  console.log('event post file', req.file);
  // tiedostonnimi bodyyn, jos haluaa
  req.body.Image = req.file.filename; // if you want to save filename to body
    console.log(req.body);
  next();
});

router.post('/', eventController.event_create_post);

router.put('/', eventController.event_update_put);

router.delete('/:id', eventController.event_delete);

module.exports = router;
