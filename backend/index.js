const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const routes = require('./routes/routes.js')

const app = express();
const PORT = process.env.PORT|| 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to MongoDb"))
.catch((err)=>console.log(err))


app.use(routes)


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

