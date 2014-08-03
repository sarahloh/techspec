var mongoose = require('mongoose'),
      config = require('./../config/config.js');
mongoose.connect(config.database_url);
var models = require('./../models')(mongoose);

exports.login = function(req, res){
  var u = req.body;
  res.send({email: u.email, password: u.password});
};
exports.signup = function(req, res){
  var u = req.body;
  res.send({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email});
};
exports.findAll = function(req, res){
  res.send([{name: 'user1'}, {name: 'user2'}]);
};
exports.findById = function(req, res){
  res.send({id:req.params.id, name: 'Sarah Loh'});
};
