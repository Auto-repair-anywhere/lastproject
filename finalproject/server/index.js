const express = require('express')
const PORT = 8080
const app = express()
const cors = require ('cors');
const paymentRouter=require('../Backend/Routes/payment')
const professionalRouter=require('../Backend/Routes/professional')
const {connection} =require('../Backend/db/index')
const carplate=require('../Backend/Routes/findcar')
const auth =require('../Backend/Routes/auth.route')



app.use(cors())
app.use(express.json())

app.use('/auth',auth)
app.use('/findcar',carplate)
app.use('/payment',paymentRouter)
app.use('/req',professionalRouter)


app.use(express.static(__dirname + '/../client/dist'))

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})