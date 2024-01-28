const inventoryModel = require("../models/inventoryModel")
const userModel = require("../models/userModel")

// create inventory
const createInventoryController = async (req, res) => {
    try {
        const {email, inventoryType} = req.body
        // validation
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error("User not found.")
        }

        if(inventoryType === "in" && user.role !== "donar"){
            throw new Error("Not a donar account")
        }
        if(inventoryType === "out" && user.role !== "hospital"){
            throw new Error("Not a hopital")
        }

        // save records
        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success:true,
            message: "new blood record added"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(401).send({
            success: false,
            message: "Error while creating inventory",
            error
        })
    }
}

const getInventoryController = async (req, res) => {
    try {
        const inventory = await inventoryModel.find({organisation: req.body.userId}).populate("donar").populate("hospital").sort({createdAt : -1})
        return res.status(200).send({
            success: true,
            message: "Inventory got successfully",
            inventory
        })

    } catch (error) {
        console.log(error)
        return res.status(401).send({
            success: false,
            message: "Error while getting inventory",
            error
        })
    }
}

module.exports = {createInventoryController, getInventoryController}