var mongoose = require('mongoose'),
   testUsers = require('./../testUsers.js'),
      models = require('./../models')(mongoose),
      config = require('./../config/config.js');

mongoose.connect(config.database_url, function(){
  console.log('connected!');
  mongoose.connection.db.dropDatabase(function(){
    models.User.collection.insert(testUsers.users, function(){
      console.log('users inserted');
    });
  });
});
//var models = require('./../models')(mongoose);
//models.User.collection.insert(testUsers.users, function(){
//  console.log('users inserted');
//});

exports.login = function(req, res){
  var u = req.body;
  res.send({
    email     :  u.email,
    password  :  u.password
  });
};
exports.signup = function(req, res){
  var u = req.body;

  var user = new models.User({
    name      :  {
      first   :  req.body.firstName, 
      last    :  req.body.lastName
    }, 
    email     :  req.body.email,
    password  :  req.body.password
  });

  user.save(function(err, user){
    if(err) return console.error(err);
  });
 
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

  models.User.find(function(err, users){
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
