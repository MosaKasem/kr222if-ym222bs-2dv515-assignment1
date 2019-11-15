const router = require('express').Router()
const {getWeightedScore, getSimularity } = require('../helper/euclideanAlgo')
const validation = require('../helper/validation')

// Homepages for ratings
router.get('/ratings/:id', validation, async (req, res) => {
  try {
    const userID = req.params.id
    const result = getSimularity(userID)

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
    const result = getWeightedScore(userID)
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
