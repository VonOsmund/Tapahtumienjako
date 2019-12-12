'use strict';
const blankModel = require('../js/blankModel');

const event_list_get = async (req, res) => {
    const fp = await blankModel.getFrontPage();
    await res.send(fp);
};

module.exports = {
    event_list_get,};
