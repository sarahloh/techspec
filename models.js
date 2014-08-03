var mongoose = require('mongoose');
module.exports = function(mongoose) {
  var User = mongoose.Schema({
    name       :  {
      first    :  String,
      last     :  String
    },
    email      :  String,
    password   :  String
  });
  // declare models
  var models = {
    User : mongoose.model('User', User)
  };
  return models;
}
