const testController = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test Controller."        
    })
}

module.exports = { testController }