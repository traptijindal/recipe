const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express();
const PORT = process.env.PORT|| 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to MongoDb"))
.catch((err)=>console.log(err))

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

