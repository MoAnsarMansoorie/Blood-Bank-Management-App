const JWT = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if(err) {
                return res.status(400).send({
                    success: false,
                    message: "Auth failed",
                    err
                })
            } else {
                req.body.userId = decode.userId;
                next()
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "Authorization failed",
            error
        })
        
    }
}