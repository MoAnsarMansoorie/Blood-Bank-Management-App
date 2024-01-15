const express = require("express")
const { registerController, loginController, currentUserController } = require("../controllers/authController")

const router = express.Router()

// routes
// POST || REGISTER
router.post("/register", registerController)

// POST || LOGIN
router.post("/login", loginController)

// GET || CURRENTUSER
router.get("/user", currentUserController)

module.exports = router