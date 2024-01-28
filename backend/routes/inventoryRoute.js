const express = require("express")
const authMiddleware = require("../middlewares/authMiddleware")
const { createInventoryController, getInventoryController } = require("../controllers/inventoryController")

const router = express.Router()

// POST || CREATE INVENTORY
router.post("/create-inventory", authMiddleware, createInventoryController)

// GET || ALL INVENTORY RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController)

module.exports = router