const http = require('http');
const socketIO = require('socket.io');

io.on('connection', (socket) => {
    console.log('Client connected');
  
    socket.on('sendNotification', ({ userId }) => {
      const notificationMessage = 'You have a new notification!';
      const recipientSocketId = findRecipientSocketId(userId);
  
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('notification', { message: notificationMessage });
      }
    });
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });