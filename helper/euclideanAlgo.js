'use strict'

const ratings = require('../ratings.json')
const { UserID } = require('./types')

/**
 * The method returns the similiarity score between user A and user B
 * @param {the id of user} userID
 * @param {the user object} userB
 */
const euclidean = (userID, userB) => {
  let simularityScore = 0
  let n = 0

  const userA = ratings.filter(e => e.UserID === userID) // get user A ratings

  for (const rootUser of userA) {
    for (const currentUser of userB) {
      if (rootUser.Movie === currentUser.Movie) { // if its same movie
        simularityScore += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
        // simularityScore += parseFloat((rootUser.Rating - currentUser.Rating) ** 2) // alternative
        n += 1
      }
    }
  }
  if (n === 0) {
    return 0
  }
  return 1 / (1 + simularityScore)
}

/**
 * keyValue is key name from the object: in this case, Movie or UserID
 * @param {*} keyValue
 */
function sortByKey (keyValue) {
  const sorted = []
  ratings.forEach(function (a) {
    this[a.UserID] || sorted.push(this[a.UserID] = [])

    this[a.UserID].push(a)
  }, Object.create(null))
  return sorted
}

const getSimularity = userID => {
  const resultArray = []
  const sorted = sortByKey(UserID) // type

  for (let i = 0; i < sorted.length; i++) {
    if (userID !== sorted[i][0].UserID) {
      const result = euclidean(userID, sorted[i])
      resultArray.push({ result: result, id: sorted[i][0].UserID })
    }
  }
  console.log('resultArray: ', resultArray);
  return resultArray
}

function getSimilarity (a, b) {
  if (a === 0) { return b }
  if (b === 0) { return a }

  // decrease and conqure - recursion
  return getSimilarity(b, a % b)
}

const getWeightedScore = userID => {
  const sortedMovies = ratings.sort(function (a, b) {
    return -(a.Movie - b.Movie || a.Movie.localeCompare(b.Movie))
  })
  for (let i = 0; i < sortedMovies.length; i++) {
    console.log(sortedMovies[i])
  }
}

function euclideanWeight (userID, allUsers) {
  const simResult = getSimularity(userID)
  for (let i = 0; i < simResult.length; i++) {
    for (let j = 0; j < ratings.length; j++) {
      // if (simResult.id === ratings[j].UserID)
      console.log('ratings[j].UserID: ', ratings[j].UserID)
      const element = ratings[j]
    }
  }
}
// euclideanWeight('1', ratings)
// getWeightedScore('1')