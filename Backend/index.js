const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const PORT = 8080
const app = express()
const cors = require ('cors');
const paymentRouter=require('../Backend/Routes/payment')
const professionalRouter=require('../Backend/Routes/professional')
const chatrouter =  require('../Backend/Routes/chatroutes')
const {connection} =require('../Backend/db/index')
const carplate=require('../Backend/Routes/findcar')
const auth =require('../Backend/Routes/auth.route')
const forumRouter=require('../Backend/Routes/forum')
const requestRouter=require('../Backend/Routes/reqUser')
app.use(cors())
app.use(express.json())
connection.sync()

const server = http.createServer(app);

const io = socketIo(server);
io.on("connection", (socket) => {
  socket.on("chat_message", (data) => {
    socket.broadcast.emit("show_notification", data);
  });
});
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // socket.on('newMessage', (data) => {
//   //   console.log('New message:', data);
    
//   //   io.emit('newMessage', data);
//   // });

//   // socket.on('disconnect', () => {
//   //   console.log('User disconnected');
//   // });
// })
app.use('/auth',auth)
app.use('/findcar',carplate)
app.use('/payment',paymentRouter)
app.use('/req',professionalRouter)
app.use('/chat',chatrouter)
app.use('/forum',forumRouter)
app.use('/reqU',requestRouter)

app.use(express.static(__dirname + '/../client/dist'))

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

module.exports = {io};