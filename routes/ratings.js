const router = require('express').Router()
const algorithm = require('../helper/euclideanAlgo')

// Homepages for ratings
router.get('/ratings/:user', async (req, res) => {
    try {
        const userID = req.params
        console.log('userID: ', userID);
        const result = algorithm.getSimularity(userID)
        console.log('result: ', result);
    } catch (error) {
        console.log(error);
    }
})



module.exports = router