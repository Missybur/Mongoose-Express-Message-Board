'use strict';

var express = require('express');
var router = express.Router();

var MessageBoard = require('../models/messageBoard');

router.get('/', function(req, res) {
  MessageBoard.find({}, function(err, messageBoards) {
    res.send(messageBoards);
  });
});

router.post('/', function(req, res) {
  var messageBoard = new MessageBoard(req.body);
  messageBoard.save(function(err, savedmessageBoard){
    res.send(savedmessageBoard);
  });
});

router.put('/', function(req, res) {
  MessageBoard.findByIdAndUpdate( req.body._id , req.body, function(err, messageBoard){
    res.send(messageBoard);
  });
});

router.delete('/', function(req, res) {
  MessageBoard.findByIdAndRemove(req.body._id, function(err, messageBoard){
    res.send();
  });
});

module.exports = router;