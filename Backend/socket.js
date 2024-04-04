// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connect', (socket) => {
  console.log('A user connected');
   
  socket.on('notification', (message) => {
    console.log('Message from client:', message);
    io.emit('message', message);

  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
