const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")
const testRoute = require("./routes/testRoute")

// dotenv config
dotenv.config()

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