const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")
const connectToDB = require("./config/db")
const testRoute = require("./routes/testRoute")
const authRoute = require("./routes/authRoute")
const inventoryRoute = require("./routes/inventoryRoute")

// dotenv config
dotenv.config()

// databse config
connectToDB()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// port
const PORT = process.env.PORT || 8080

// middleware
app.use("/api/v1/test", testRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/inventory", inventoryRoute)

// routes
// test route
// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Welcome to blood bank"
//     })
// })

app.get("/", (req, res) => {
    res.send("Home page")
})

// listen
app.listen(PORT, () => {
    console.log(`Server is started in ${process.env.DEV_MODE} at port http://localhost:${process.env.PORT}`.bgBlue.white)
})