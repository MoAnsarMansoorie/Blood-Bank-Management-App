const express = require("express")
const { registerController, loginController } = require("../controllers/authController")

const router = express.Router()

// routes
// POST || REGISTER
router.post("/register", registerController)

// POST || LOGIN
// router.post("/login", loginController)

module.exports = router