const fs = require('fs')

const { USER_ID, MOVIE } = require('./types')
const ratings = require('../ratings.json')
const users = require('../users.json')
const { sortByKey } = require('./euclideanAlgo')

const pearson = (userA, userB) => {
  console.log('userA: ', userA);
  // Initialize variables
  // m
  let sumOne = 0
  let sumTwo = 0
  let sum1sq = 0
  let sums2sq = 0
  let pSum = 0
  let n = 0
  for (const rootUser of userA) {
    for (const currentUser of userB) {
      if (rootUser.Movie === currentUser.Movie) { // if its same movie
        console.log(typeof (rootUser.Rating))
      }
    }
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
