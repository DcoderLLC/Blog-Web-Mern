const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//creating routes

app.get("/",(req, res) =>{
    res.status(200).send({
        "message":"Node Server"
    })
})

//listen
app.listen(8080, () =>{
    console.log("Server running on port 8080".bgCyan.white)
})