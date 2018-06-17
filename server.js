'use strict';


require('dotenv').config();
//node modules
const net = require('net');
const server = net.createServer();

//app modules
const msgParser = require('./lib/parse-message.js');

let sockets = [];

const PORT = process.env.PORT;


server.on('connection', function(socket){
  console.log('a client connected');

  socket.username = `user_${Math.floor(Math.random() * 100)}`;
  sockets.push(socket);

  socket.on('data', function(buffer){
    let message = buffer.toString();

    if(message.startsWith('/nick')){
      return msgParser.nickCommand(message, socket);
    }

    if(message.startsWith('/dm')){
      return msgParser.dmCommand(message, socket, sockets);
    }
    if(message.startsWith('/all')){
      return msgParser.allCommand(message, socket, sockets);
    }
    if(message.startsWith('/users')){
      return msgParser.usersCommand(message, socket, sockets);
    }
    if(message.startsWith('/troll')){
      return msgParser.trollCommand(message, socket, sockets);
    }
    if(message.startsWith('/ban')){
      return msgParser.banUserCommand(message, socket, sockets);
    }
  });

  socket.on('close', function(){
    console.log('a client left the chatroom');
    sockets.forEach( (client, index) => {
      if (client === socket){
        sockets.splice(index, 1);
      }
    });
  });
});

server.listen(PORT, function(){
  console.log('server up on port: ', PORT || 3000);
});
