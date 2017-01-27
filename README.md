# tcp-chat-server
A simple but fun TCP chat server using Node's Net module 

This is a TCP chat server made as part of a lab project with [Codefellows.com](https://www.codefellows.org/).

To start, open three terminal windows. In your first window, choose a directory you would like to clone this repo into and copy/paste the commmand:

```
git clone https://github.com/JudyVue/tcp-chat-server.git

```

CD into the ``tcp-chat-server`` directory and install all depedencies by typing the command:

```
npm i
```

In your first terminal window, type in the command, ``node server.js``. You will see a log that tells your server is running on PORT 4000. 

In your second window, type the command ``telnet localhost 4000``. You are now connected to a TCP chatroom as a new user. 

In your third window, you can type the same command. Congrats! You are now connected as a second user and can chat with yourself!


Here are the following commands you can type in the chatroom. All contents contained in ``<>`` means you can customize this as you see fit. 

To change your username:
```
/nick <name>
```

To send a message to everyone in the chatroom:
```
/all <your message>
```

To get a list of all other users in the chatroom:
```
/users
```

To troll all the users in the chatroom (not recommended, but always fun):
```
/troll <your preferably inappropriate message here>
```

To ban a user from a chatroom because they abused the above command too much:
```
/ban <username>
```

If you have a budding social life, you can tell your friends to connect to this TCP chatroom on their own computer. They can open up their own terminal and type in:

```
telnet <your computer's IP adderss>
```
To find your own IP address, type into your own terminal:
```
ifconfig |grep inet
```

You will see a response that looks like the following:
```
inet6 ::1 prefixlen 128
inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1
inet 127.0.0.1 netmask 0xff000000
inet6 fe80::fa1e:dfff:feea:d544%en1 prefixlen 64 scopeid 0x5
inet 192.168.0.100 netmask 0xffffff00 broadcast 192.168.0.255
```

Your IP address will be the number on the last line after ``inet``. 

Now you can chat with your friends until your heart's content.

Eat your heart out, Slack!
