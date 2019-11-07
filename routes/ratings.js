const router = require('express').Router()

// Homepages for ratings
router.get('/ratings', async (req, res) => {
    res.send("ratings route")
})

module.exports = router