/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */

// var refresh = function(_rooms){
//   for(var i=0;i<_rooms.length;i++){
//     console.log(_rooms[i]);
//   }
  
// }

(function (io) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }


  socket.on('connect', function socketConnected() {

    // Listen for Comet messages from Sails
    socket.on('refreshRooms', function messageReceived(message) {

      log('New comet message received :: ', message);
      //refresh();
    });

  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;


  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }
  

}(window.io));

(function($){
    var $roomForm = $('#roomForm'),
        $button = $('#button'),
        $rmRoom = $('#buttonRm');

    $button.on('click', function(){
        var formData = {
          id:$("#id").val(),
          password:$("#password").val()
        };
        console.log(formData);
        
        socket.post('/room',formData,function(res){

        })
    });
     $rmRoom.on('click', function(){
        var formData = $roomForm.serialize();

        
     socket.delete("/room/"+formData.id,function(){

     })
    });

    // $.ajax({
    //   type:'GET',
    //   url:'/room',
    // }).done(function(data){
    //   console.log("Aki");
    //   console.log(data);
    //  // refresh(data);
    // }).fail(function(data){

    // });
    

}(jQuery));
