var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
  console.log('Connected to db!');

  var userSchema = mongoose.Schema({
    name: String
  });
  var User = mongoose.model('User', userSchema);
/*
  var user1 = new User({name: 'Molly'});
  user1.save(function(err, user1) {
    if (err) return console.error(err);
    console.info(user1.name + ' added!');
  });
*/
});
