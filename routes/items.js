const router = require('express').Router()

// Homepages for items
router.get('/items', async (req, res) => {
    res.send("items route")
})


module.exports = router