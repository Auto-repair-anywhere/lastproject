const express = require('express')
const PORT = 8080
const app = express()
const cors = require ('cors');
const paymentRouter=require('../Backend/Routes/payment')
const professionalRouter=require('../Backend/Routes/professional')

app.use(cors())
const auth =require('../Backend/Routes/auth.route')
app.use(express.json())
const {connection} =require('../Backend/db/index')
// connection.sync({alter: true})
app.use('/payment',paymentRouter)
app.use('/req',professionalRouter)


app.use(express.static(__dirname + '/../client/dist'))
//app.use("/",Route)
app.use('/auth',auth)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})