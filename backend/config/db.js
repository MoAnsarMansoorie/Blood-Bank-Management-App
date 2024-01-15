const mongoose = require("mongoose")
const colors = require("colors")

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to mongodb database ${mongoose.connection.host}`.bgMagenta.white)
        
    } catch (error) {
        console.log(`Error in database ${error}`.bgRed.white)
    }
}

module.exports = connectToDB