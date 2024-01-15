const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        // validation
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: "User already exist"
            })
        }
        
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        // rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success: true,
            message: "User created successfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Error in register api",
            error
        })
    }
}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email})
        // validation
        if(!user){
            return res.status(400).send({
                success: false,
                message: "Invalid credientials"
            })
        }

        // check role
        // if(user.role !== req.body.role){
        //     return res.status(400).send({
        //         success: false,
        //         message: "role doesn't match"
        //     })
        // }

        // compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
            return res.status(400).send({
                success: false,
                message: "Invalid crediantials"
            })
        }
        
        const token = await jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "2d"})
        return res.status(201).send({
            success: true,
            message: "Login successfully",
            user, 
            token
        })

    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message : "Error in login api",
            error
        })
    }
}

const currentUserController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id : req.body.userId})
        return res.status(200).send({
            success: true,
            message: "User Fetched Successfully",
            user,
        });
        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Error in current user api",
            error
        })
        
    }
}

module.exports = { registerController, loginController, currentUserController}