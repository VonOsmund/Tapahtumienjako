'use strict';
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'projekti',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

module.exports = pool;
