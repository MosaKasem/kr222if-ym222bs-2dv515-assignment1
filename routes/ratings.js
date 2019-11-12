const router = require('express').Router()
const algorithm = require('../helper/euclideanAlgo')

// Homepages for ratings
router.get('/ratings/:id', async (req, res) => {
  try {
    const userID = req.params.id
    const result = algorithm.getSimularity(userID)

    const resultFromEuc = result.map((data) => {
      return {
        id: data.id,
        rating: data.result
      }
    })
    return res.send(resultFromEuc.sort((a, b) => b.rating - a.rating))
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
