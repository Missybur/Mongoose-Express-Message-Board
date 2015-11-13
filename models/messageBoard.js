'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
  // moment().format();

var messageSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
  date: { type: Date, required: true, default: new Date() }
});

var Message = mongoose.model('Goose', messageSchema);

module.exports = Message;