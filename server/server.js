// import is a ES6 feature not supported by nodejs by default and it can  supported by babel right now 
import path from "path";
// express internally uses inbuilt module called http to create server so import. 
import http from "http";

import express from "express";
// socketIo is a library for abstracting websocket connections.
import socketIo from "socket.io";


// this connects server to the client,setting up the path i.e currentdir/public.
const publicPath=path.join(__dirname,'../public');
console.log("publicPath",publicPath);

// setting up the port.
const port = process.env.PORT || 3000;

// configure express application.
const app = express();
// express works with http.
const server = http.createServer(app);

const io=socketIo(server);


// using the express middleware
app.use(express.static(publicPath));

// to establish socket connection
io.on('connection', (socket) => {
    console.log('New user connected');
  
  
  //  // sending/broadcasting messages(from here i.e server) to client ---1.
  //  socket.emit('newMessage',{    
  //    from: 'akram@cm.com',
  //    text:'server to client'
  //  });
  
   // listening messages from client ---2.
   socket.on('createMessage',(message)=>{
    console.log('createMessage',message);  
    io.emit('newMessage',{
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });  
   });

    // to disconnect socket
    socket.on('disconnect', () => {
      console.log('User was disconnected');
    });
    });

server.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});