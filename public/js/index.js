const socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// listening messages from server ---1.
socket.on('newMessage', function (message) {
  console.log('New Message', message);
});


socket.on('createMessage',{
  from: 'Frank',
  text: 'Hi'
},function(data){
  console.log('Got it',data);
})
