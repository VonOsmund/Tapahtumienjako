'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const getAllEvents = async () => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM events');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getEvent = async (id) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM events WHERE Id = ?;',
        [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const addEvent = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO events (Name, Location, StartDate, StartTime, Owner, Summary, Price, Image) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};

const updateEvent = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE events SET Name = ?, Location = ?, StartDate = ?, StartTime = ?, Attendees = ?, Owner = ?, Summary = ?, Price = ?, Interested = ?, Image = ? WHERE Id = ?;',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};

const deleteEvent = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM events WHERE Id = ?;',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};


module.exports = {
  getAllEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
};
