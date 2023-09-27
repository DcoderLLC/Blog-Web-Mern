const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')




//env config
dotenv.config()

//routes import
const userRoutes = require('./routes/userRoutes')

//mongodb connection
connectDB();

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//creating routes

app.use("/api/v1/user", userRoutes)

//port

const PORT = process.env.PORT || 8080

//listen
app.listen(8080, () =>{
    console.log(`Server running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
})