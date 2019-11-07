const router = require('express').Router()

// Homepages for users
router.get('/users', async (req, res) => {
    res.send("Users route")
})


module.exports = router