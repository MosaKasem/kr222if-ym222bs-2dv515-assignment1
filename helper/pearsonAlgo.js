const fs = require('fs')

const ratings = require('../ratings.json')
const users = require('../users.json')

const pearson = (userID, userB) => {
  // Initialize variables
  let sumOne = 0
  let sumTwo = 0
  let sum1sq = 0
  let sums2sq = 0
  let pSum = 0
  const n = 0
  const rootUser = ratings.filter(e => {
    console.log(e)
  })

}
