
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();


    // Send A Message To The Server
    $('a').on('click', function(){
      var text = $('input').val();
      var image = $('input.file').val();
    //Time Stamp
    var date = Date.now();
    console.log(date);
      
      socket.emit('message', date);
      socket.emit('message', text);
      socket.emit('message', image);

    });

    // Recieve Update Event From The Server
    socket.on('update', function(msg){
      $('.messages').append(msg).append('<br>');

    });
   

});


