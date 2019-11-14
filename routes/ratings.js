const router = require('express').Router()
const algorithm = require('../helper/euclideanAlgo')

// Homepages for ratings
router.get('/ratings/:id', async (req, res) => {
  try {
    const userID = req.params.id
    const result = algorithm.getSimularity(userID)

    const resultFromEuc = result.map((data) => {
      return {
        name: data.name,
        id: data.id,
        rating: data.result
      }
    })
    return res.send(resultFromEuc.sort((a, b) => b.rating - a.rating))
  } catch (error) {
    
  }
})

router.get('/weighted/:id', async (req, res) => {
  try {
    const userID = req.params.id
    const result = algorithm.getWeightedScore(userID)
    const resultFromEuc = result.map((data) => {
      return {
        movie: data.MovieName,
        weightedScore: data.weightedScore
      }
    })
    res.json(resultFromEuc.sort((a, b) => b.weightedScore - a.weightedScore))
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
