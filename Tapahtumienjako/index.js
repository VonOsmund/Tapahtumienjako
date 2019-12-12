'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const user = require('./js/userRouter');
const event = require('./js/eventRouter');
const register = require('./js/registerRouter');
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, 'public')));
app.use('/events', event);
app.use('/users', user);
app.use('/register', register);
app.listen(port, () => console.log(`Example app listening to port ${port}!`));