const router = require('express').Router()
const {getWeightedScore, getSimularity } = require('../helper/euclideanAlgo')
const validation = require('../helper/validation')

// Homepages for ratings
router.get('/similarity/:id', validation, async (req, res) => {
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
    res.status(200).json(resultFromEuc.sort((a, b) => b.rating - a.rating))
  } catch (error) {
    res.status(500).json({
      error: error.msg,
      msg: 'Something went wrong'
    })
  }
})

router.get('/weighted/:id', validation, async (req, res) => {
  try {
    const userID = req.params.id
    const result = getWeightedScore(userID)
    const resultFromEuc = result.map((data) => {
      return {
        movie: data.MovieName,
        weightedScore: data.weightedScore
      }
    })
    res.status(200).json(resultFromEuc.sort((a, b) => b.weightedScore - a.weightedScore))
  } catch (error) {
    res.status(500).json({
      error: error.msg,
      msg: 'Something went wrong'
    })
  }
})

module.exports = router
