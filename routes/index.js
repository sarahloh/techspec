exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};
exports.login = function(req, res){
  res.render('login', { title: 'Log in' });
};
