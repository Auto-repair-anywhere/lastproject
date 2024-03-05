const express = require('express')
const PORT = 8080
const app = express()
const cors = require ('cors');
app.use(cors())
app.use(express.json())
const {connection} =require('../backend/db/index')
//connection.sync({alter: true})


app.use(express.static(__dirname + '/../client/dist'))
//app.use("/",Route)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})