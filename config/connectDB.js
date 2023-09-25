const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(("Connected to Mongoose".bgMagenta.white))
    }
    catch{
        console.log("Connect Error".bgRed.white)
    }
}

module.exports = connectDB;