
module.exports = {
  _config: {},
  index: function(req, res){

		var io = sails.io;
  	var _room = req.param('id');
  	console.log('id:' + req);
  	var _users = io.sockets.clients(_room);


  	res.view();

  	//req.socket.broadcast.to('room').emit('refreshUsersOnRoom', _users);
  },
  insertName: function () {},
  startVote: function () {},
  finishVote: function () {},


  
};
