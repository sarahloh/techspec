var mongoose = require('mongoose'),
      config = require('./../config/config.js');
mongoose.connect(config.database_url);
var models = require('./../models')(mongoose);

exports.login = function(req, res){
  var u = req.body;
  res.send({
    email     :  u.email,
    password  :  u.password
  });
};
exports.signup = function(req, res){
  var u = req.body;
  res.send({
    name      :  {
      first   :  req.body.firstName, 
      last    :  req.body.lastName
    }, 
    email     :  req.body.email,
    password  :  req.body.password
  });
};
exports.findAll = function(req, res){

  models.Users.find(function(err, users){
    if(err) return console.error(err);
    console.log(users);
    res.send(users);
  });

/*
  res.send(models.Users.find(function(err, users){
    if(err) return console.error(err);
    return users;
  }));
*/
//  res.send([{name: 'user1'}, {name: 'user2'}]);
};
exports.findById = function(req, res){
  res.send({id:req.params.id, name: 'Sarah Loh'});
};
