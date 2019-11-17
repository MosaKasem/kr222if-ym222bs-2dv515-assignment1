const fs = require('fs')

const { USER_ID, MOVIE } = require('./types')
const ratings = require('../ratings.json')
const users = require('../users.json')
const { sortByKey } = require('./euclideanAlgo')

const pearson = (userID, userB) => {
  // Initialize variables
  // m
  let sumOne = 0
  let sumTwo = 0
  let sum1sq = 0
  let sums2sq = 0
  let pSum = 0
  const n = 0
}
const getPearsonSimularity = (userID) => {
  const simularity = []

  const userA = ratings.filter(e => e.UserID === userID) // get user A ratings
  const sorted = sortByKey(USER_ID) // type

  // e.g. : [ [{user: a}, {user: a}], [{user: b}]]
  for (let i = 0; i < sorted.length; i++) {
    if (userID !== sorted[i][0].UserID) { // check so we dont iterate root user
      console.log("Test")
      const result = pearson(userID, sorted[i])
      simularity.push({ result: result, id: sorted[i][0].UserID })
    }
  }
  pearson()
}
getPearsonSimularity('2')
