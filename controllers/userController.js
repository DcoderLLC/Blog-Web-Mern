const userModel = require('../models/userModel')

//get all users
exports.getAllUsers = () =>{}

//create user register user || REGISTER CONTROL
exports.registerController = async (req, res) =>{
    try{
        const {username, email, password} = req.body
        //validation
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message : 'Please fill all fields'
            })
        }
        //existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.body.status(402).send()({
                success: false,
                message: `Error in Register, user already registerd`
            })
        }
        //save new user
        const user = new userModel({username, email, password})
        await user.save()
        return res.status(201).send({
            success: true,
            message:`New User Created`,
            user
        })
    }
    catch{
        console.log(error)
        return res.status(500).send({
            message: "Error In Register",
            success: false,
            error
        })
    }
}

//login
exports.loginController = () => {}