'use strict'

const ratings = require('../ratings.json')
const { USER_ID, MOVIE } = require('./types')

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
        // simularityScore += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
        simularityScore += (rootUser.Rating - currentUser.Rating) ** 2 // alternative
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
 * @returns a sorted array of arrays based on the parameter (Movie )
 */
const sortByKey = keyValue => {
  const sorted = []
  ratings.forEach(function (a) {
    this[a[keyValue]] || sorted.push(this[a[keyValue]] = [])

    this[a[keyValue]].push(a)
  }, Object.create(null))

  return sorted
}

const getSimularity = userID => {
  const simularity = []
  const sorted = sortByKey(USER_ID) // type

  for (let i = 0; i < sorted.length; i++) {
    if (userID !== sorted[i][0].UserID) { // check so we dont iterate root user
      const result = euclidean(userID, sorted[i])
      simularity.push({ result: result, id: sorted[i][0].UserID })
    }
  }
  return simularity
}

// function getSimilarity(a, b) {
//   if (a === 0) { return b }
//   if (b === 0) { return a }

//   // decrease and conqure - recursion
//   return getSimilarity(b, a % b)
// }


const getRecommendation = (simularityResult, movie) => {
  
  let sum = 0
  let simularityScore = 0

  movie.map(e => {
    console.log('e: ', e);
    simularityResult.map(simularity => {
      if (e.UserID === simularity.id) {
        sum += simularity.result * parseFloat(e.Rating)
        simularityScore += simularity.result
      }
    })
  })
  console.log(simularityScore)
  // for (let i = 0; i < movie.length; i++) {
  //   for (let j = 0; j < simularityResult.length; j++) {
      
  //     if (movie[i].UserID === simularityResult[j].id) {
        
  //       sum += simularityResult[j].result * parseFloat(movie[i].Rating)
  //       simularityScore += simularityResult[j].result
        
  //     }
  //   }
  // }
}

/**
 * iterates the movies and calls next method to calculate recommendation score and returns the array.
 * @param {the id of the user} userID
 */
const getWeightedScore = userID => {
  const result = []
  const sortedList = sortByKey(MOVIE) // sort ratings by movie name
  const simResult = getSimularity(userID) // get similuarity score for user

  const recommendation = getRecommendation(simResult, sortedList[0]) // similarity score and movieSet
  // TODO: UN COMMENT WHEN FINISHED>
  // sortedList.map((movieSet, i) => { // Map the array of movies
    // const recommendation = getRecommendation(simResult, movieSet) // similarity score and movieSet
  // })
  // TODO: UN COMMENT WHEN FINISHED/>
}
getWeightedScore('7')

// euclideanWeight('1', ratings)
// getWeightedScore('1')
