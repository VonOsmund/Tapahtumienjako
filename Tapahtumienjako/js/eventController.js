'use strict';
const eventModel = require('../js/eventModel');

const event_list_get = async (req, res) => {
  const events = await eventModel.getAllEvents();
  await res.json(events);
};

const event_get = async (req, res) => {
  const eventget = await eventModel.getEvent(req.params.id);
  await res.json(eventget[0]);
};

const event_create_post = async (req, res) => {
  const params = [
    req.body.Name,
    req.body.Location,
    req.body.StartDate,
    req.body.StartTime,
    req.body.Owner,
    req.body.Summary,
    req.body.Price,
    req.body.Image]; // or req.body.filename if filename saved to body
  console.log('create', params);
  const event = await eventModel.addEvent(params);
  await res.redirect(events);
};

const event_update_put = async (req, res) => {
  console.log('body', req.body);
  const params = [
    req.body.Name,
    req.body.Location,
    req.body.StartDate,
    req.body.StartTime,
    req.body.Owner,
    req.body.Summary,
    req.body.Price,
    req.body.Image];
  console.log('update', params);
  const update = await eventModel.updateEvent(params);
  await res.json(update);
};

const event_delete = async (req, res) => {
  const params = [req.params.id];
  console.log('delete', params);
  const deletion = await eventModel.deleteEvent(params);
  await res.json(deletion);
};

module.exports = {
  event_list_get,
  event_get,
  event_create_post,
  event_update_put,
  event_delete,
};
