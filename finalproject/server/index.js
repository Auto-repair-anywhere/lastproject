const express = require('express')
const PORT = 8080
const app = express()
const cors = require ('cors');
app.use(cors())
const auth =require('../Backend/Routes/auth.route')
app.use(express.json())
const carplate=require('../Backend/Routes/findcar')
//connection.sync({alter: true})


app.use(express.static(__dirname + '/../client/dist'))
//app.use("/",Route)
app.use('/auth',auth)
app.use('/findcar',carplate)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})