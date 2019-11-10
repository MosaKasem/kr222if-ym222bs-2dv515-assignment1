'use strict'

const fs = require('fs')
const ratings = require('../ratings.json')
const users = require('../users.json')

const euclidean = (userID, userB) => {

    let simularityScore = 0
    let n = 0

    const userA = ratings.filter(e => e.UserID === userID) // get user A ratings

    for (let rootUser of userA) {
        for (let currentUser of userB) {
            if (rootUser.Movie === currentUser.Movie) { // if its same movie
                // simularityScore += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
                simularityScore += (rootUser.Rating - currentUser.Rating) ** 2
                n += 1
            }
        }
    }
    if (n === 0) {
        return 0
    }
    return 1 / (1 + simularityScore)
}
module.exports.getSimularity = userID => {
    let resultMap = new Map()
    let resultArray = []
    let grouped = [];
    ratings.forEach(function (a) {
        this[a.UserID] || grouped.push(this[a.UserID] = []);
        this[a.UserID].push(a);
    }, Object.create(null));
    
    for (let i = 0; i < grouped.length; i++) {
        if (userID !== grouped[i][0].UserID) {
            let result = euclidean(userID, grouped[i])
            resultMap.set(grouped[i][0].UserID, result)
            resultArray.push({result: result, id:grouped[i][0].UserID})
        }
    }
    return resultArray
}

function getSimilarity(a, b) {
    if (a === 0) { return b; }
    if (b === 0) { return a; }

    // decrease and conqure - recursion
    return getSimilarity(b, a % b);
}