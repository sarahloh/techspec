exports.findAll = function(req, res){
  res.send([{name: 'user1'}, {name: 'user2'}]);
};
exports.findById = function(req, res){
  res.send({id:req.params.id, name: 'Sarah Loh'});
};
