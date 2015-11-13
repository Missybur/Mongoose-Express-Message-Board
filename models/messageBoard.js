'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
  timeCreated: String
});

var Message = mongoose.model('Goose', messageSchema);

module.exports = Message();