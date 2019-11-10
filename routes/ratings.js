const router = require('express').Router()
const algorithm = require('../helper/euclideanAlgo')

// Homepages for ratings
router.post('/ratings/:id', async (req, res) => {
    try {
        const userID = req.params.id
        const result = algorithm.getSimularity(userID)
        const resultFromEuc = result.map((data) => {
            return {
                id: data.id,
                rating: data.result
            }
        })
        console.log('resultFromEuc: ', resultFromEuc);
        res.send(resultFromEuc)
    } catch (error) {
        console.log(error);
    }
})



module.exports = router