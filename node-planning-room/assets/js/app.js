/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */


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

    });

    socket.on('refreshUsersOnRoom' function(message){
      console.log(message)
    })

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
  

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);

(function($){
    var $roomForm = $('#roomForm'),
        $button = $('#button'),
        $rmRoom = $('#buttonRm');

    $button.on('click', function(){
        var formData = $roomForm.serialize();

        $.ajax({
            type: 'post',
            url: '/room',
            data: formData
        }).done(function(data){
            console.log(data);
        }).fail(function(jqXHR){
            console.log(jqXHR.responseJSON);
        });
    });
     $rmRoom.on('click', function(){
        var formData = $roomForm.serialize();

        $.ajax({
            type: 'DELETE',
            url: '/room',
            data: formData
        }).done(function(data){
            console.log(data);
        }).fail(function(jqXHR){
            console.log(jqXHR.responseJSON);
        });
    });


}(jQuery));
