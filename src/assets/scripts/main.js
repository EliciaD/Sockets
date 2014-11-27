
// Wait for DOM to Load
jQuery(function($) {

    // Create New Socket Connection using Socket.io
    var socket = io();


    // Send A Message To The Server
    $('a').on('click', function(){
      var text = $('#messageInput').val();
      var image = $('#URLInput').val();
    //Time Stamp
    var date = Date.now();
    console.log(date);
      
      socket.emit('message', image, text, date); 

    });

    // Recieve Update Event From The Server
    socket.on('update', function(image, msg, date){
      $('.messages').append("<img class='thumbnail' src='" + image + "'/>");
      $('.messages').append("<p class='userMsg'>" + msg + "</p>").append('<br>');
      $('.messages').append(date).append('<br>');

    });
   

});


