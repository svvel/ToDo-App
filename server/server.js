const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const router = require('./routes/ToDoRoutes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('dotenv').config()
const port = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGODB_URL)
  .then(()=>{
    console.log("Mongodb connected")
  })

app.use(router)

app.listen(port, () => console.log(`server listening on port ${port}!`))