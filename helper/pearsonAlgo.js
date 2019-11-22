
const ratings = require('../ratings.json')
const { sortByKey, addNames } = require('./euclideanAlgo')
const { USER_ID, MOVIE } = require('./types')

const pearson = (userA, userB) => {
  // Initialize variables
  let sumOne = 0
  let sumTwo = 0
  let sum1sq = 0
  let sum2sq = 0
  let pSum = 0
  let n = 0

  for (const rootUser of userA) {
    for (const currentUser of userB) {
      if (rootUser.Movie === currentUser.Movie) { // if its same movie
        sumOne += Number(rootUser.Rating) // sum ratings for user A
        sumTwo += Number(currentUser.Rating) // sum ratings for user B

        sum1sq += Number(rootUser.Rating) ** 2 // sum of squared rating for user A
        sum2sq += Number(currentUser.Rating) ** 2 // sum of squared rating for user B

        pSum += Number(rootUser.Rating) * Number(currentUser.Rating) // product of ratings from A and B
        n += 1 // number of ratings in commong between A and B
      }
    }
  }
  if (n === 0) {
    return 0 // nothing in common, return 0
  }

  const num = pSum - (sumOne * sumTwo / n)
  const den = Math.sqrt((sum1sq - sumOne ** 2 / n) * (sum2sq - sumTwo ** 2 / n))
  return num / den
}

const getPearsonSimularity = (userID) => {
  const simularity = []

  const userA = ratings.filter(e => e.UserID === userID) // get user A ratings
  const sorted = sortByKey(USER_ID) // type

  // e.g. : [ [{user: a}, {user: a}], [{user: b}]]
  for (let i = 0; i < sorted.length; i++) {
    if (userID !== sorted[i][0].UserID) { // check so we dont iterate root user
      const result = pearson(userA, sorted[i])
      simularity.push({ result: result, id: sorted[i][0].UserID })
    }
  }
  // filter away the users with no similarity
  const sortedList = simularity.filter(e => e.result > 0).sort((a, b) => b.result - a.result)
  return addNames(sortedList)
}

/**
 * iterates the movies and calls next method to calculate recommendation score and returns the array.
 * @param {the id of the user} userID
 */
const getWeightedScore = (userID) => {
  const result = []
  const rootUser = ratings.filter(e => e.UserID === userID) // fetch user

  const sortedList = sortByKey(MOVIE) // sort ratings by movie name
  const simResult = getPearsonSimularity(userID)
  for (let i = 0; i < sortedList.length; i++) {
    const score = getRecommendation(simResult, sortedList[i])
    let movieName
    for (let j = 0; j < sortedList[i].length; j++) {
      movieName = sortedList[i][j].Movie
    }
    result.push({ MovieName: movieName, weightedScore: score })
  }
  // try {
  //   sortedList.map((movieSet, i) => { // Map the array of movies

  //     const score = getRecommendation(simResult, movieSet) // similarity score and movieSet

  //     const movieName = movieSet[i].Movie
  //     
  //     result.push({ MovieName: movieName, weightedScore: score })
  //   })
  // } catch (error) {
  //   
  // }
  const filterSeenMovies = result.filter(({ MovieName: listMovieName }) => !rootUser.some(({ Movie: rootMovieName }) => rootMovieName === listMovieName))
  const filterOutZeros = filterSeenMovies.filter(rating => rating.weightedScore > 0)
  return filterOutZeros
}

const getRecommendation = (simularityResult, movie) => {
  let weightedScore = 0
  let simularityScore = 0

  movie.map(e => {
    simularityResult.map(simularity => {
      if (e.UserID === simularity.id) {
        weightedScore += Number(simularity.result) * Number(e.Rating)
        simularityScore += Number(simularity.result)
      }
    })
  })

  if (simularityResult === 0 || weightedScore === 0) {
    return 0
  }
  return Number(weightedScore) / Number(simularityScore)
}

exports.getPearsonSimularity = getPearsonSimularity
exports.getWeightedScore = getWeightedScore
