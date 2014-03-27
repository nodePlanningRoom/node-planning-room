
module.exports = {

  _config: {},

  create: function(req, res){
    var _id = req.param('id');
    var _pass = req.param('password');
    var _rooms = null;
  	var _roomsIds = [];

    Room.create({
      id: _id,
      password: _pass,
      users: []
    }).done(function(err, room){
    	var io = sails.io;
    	Room.find()
      	.then(function(room){
      		_rooms = room;	
      	})
      	.done(function(){
      		for(var i=0;i<_rooms.length;i++){
    				console.log(_rooms[i].id);
  				  _roomsIds.push(_rooms[i].id);	           			
      		}
      		io.sockets.emit('refreshRooms',_roomsIds);
          socket.join(_id);

        });	
    });
  },
  destroy: function(req, res) {
  	console.log("destroing Rooms");

  	Room.findOne({
      name: 'Steven',
      age: 32,
      phone:'(210)-555-1234'
    }).done(function(err, user) {

      // Error handling
      if (err) {
        return console.log(err);

      // The User was found successfully!
      } else {
        console.log("User found:", user);
      }
    });
  },

};
