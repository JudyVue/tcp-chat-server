'use strict';

module.exports = exports = {};

exports.nickCommand = function(msg, socket){
  socket.username = msg.split(' ').slice(1).join(' ').trim();
  socket.write(`You are now ${socket.username}\n`);
};

exports.dmCommand = function(msg, socket, array){
  let toUsername =  msg.split(' ')[1];
  let content = msg.split(' ').slice(2).join(' ').trim();

  array.forEach((s) => {
    if (s.username === toUsername){
      s.write(`${socket.username}: ${content}`);
    }
  });
};

exports.allCommand = function(msg, socket, array){
  console.log('line 22', msg);
  array.forEach((s) => {
    s.write(`${socket.username}: ${msg.split(' ').slice(1).join(' ').trim()}\n`);
  });
};

exports.usersCommand = function(msg, socket, array){
  let users = array.map((element) => {
    return element.username;
  });
  socket.write(`Here are the available users in the chatroom:\n${users}.\nTo message a user, type "/dm <username> <your message>."\n`);
};

exports.trollCommand = function(msg, socket, array){
  array.forEach((s) => {

    for (let i = 0; i < 10; ++i){
      s.write(`${socket.username}: ${msg.split(' ').slice(1).join(' ').trim()}\n`);
    }
  });
};

exports.banUserCommand = function(msg, socket, array){
  let bannedUser = msg.split(' ')[1].trim();

  array.forEach((user, index) => {
    if(user.username === bannedUser){
      array.splice(index, 1);
      user.end(`${socket.username} has kicked you off the server for being a dick.\n`);
    }
  });
};
