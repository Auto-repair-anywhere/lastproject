const express = require('express')
const PORT = 8080
const app = express()
const cors = require ('cors');
const paymentRouter=require('./Routes/payment')
const professionalRouter=require('./Routes/professional')
// const chatrouter =  require('../Backend/Routes/chatroutes')
const {connection} =require('./db/index')
const carplate=require('./Routes/findcar')
const auth =require('./Routes/auth.route')

app.use(cors())
app.use(express.json())
connection.sync()


app.use('/auth',auth)
app.use('/findcar',carplate)
app.use('/payment',paymentRouter)
app.use('/req',professionalRouter)
// app.use('/chat',chatrouter)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})