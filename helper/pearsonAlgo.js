const fs = require('fs')

const { USER_ID, MOVIE } = require('./types')
const ratings = require('../ratings.json')
const users = require('../users.json')
const { sortByKey } = require('./euclideanAlgo')

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
}
getPearsonSimularity('2')
