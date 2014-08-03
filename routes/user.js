var mongoose = require('mongoose'),
   testUsers = require('./../testUsers.js'),
      models = require('./../models')(mongoose),
      config = require('./../config/config.js');

mongoose.connect(config.database_url, function(){
  console.log('connected to db');
  mongoose.connection.db.dropDatabase(function(){
    models.User.collection.insert(testUsers.users, function(){
      console.log('users inserted');
    });
  });
});

exports.login = function(req, res){
  var r = req.body;
  res.send({
    email     :  r.email,
    password  :  r.password
  });
};

exports.signup = function(req, res){
  var r = req.body;
  var user = new models.User({
    name      :  {
      first   :  r.firstName, 
      last    :  r.lastName
    }, 
    email     :  r.email,
    password  :  r.password
  });
  user.save(function(err, user){
    if(err) return console.error(err);
  });
};

exports.findAll = function(req, res){
  models.User.find(function(err, users){
    if(err) return console.error(err);
//    console.log(users);
    res.send(users);
  });
};

exports.findById = function(req, res){
  models.User.findById(req.params.id, function(err, user){
    if(err) return console.error(err);
//    console.log(user);
    res.send(user);
  });
};
