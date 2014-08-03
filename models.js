var mongoose = require('mongoose');
module.exports = function(mongoose) {
  var User = mongoose.Schema({
    email        :    String,
    password     :    String
  });
  // declare models
  var models = {
    Users : mongoose.model('Users', User)
  };
  return models;
}
console.log('in models.js');
