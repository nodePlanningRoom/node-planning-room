/**
 * RoomController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RoomController)
   */
    _config: {},

    create: function(req, res){
            var _id = req.param('id');
            var _pass = req.param('password');
            var _rooms = null;
          	var _roomsIds = [];

            Room.create({
                id: _id,
                password: _pass
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
