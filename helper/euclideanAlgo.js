'use strict'

const fs = require('fs')
const ratings = require('../ratings.json')
const users = require('../users.json')

function euclidean(userID, userB) {
    // console.log('userB: ', userB);
    // console.log('userB: ', ...userB);

    let simularityScore = 0
    let n = 0
    let newArr = [];
    let euclideanObj = {}

    const userA = ratings.filter(e => e.UserID === userID) // get user A ratings

    for (let rootUser of userA) {
        for (let currentUser of userB) {
            if (rootUser.Movie === currentUser.Movie) { // if its same movie
                // sim += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
                simularityScore += parseFloat((rootUser.Rating - currentUser.Rating) ** 2)
                n += 1
            }
        }
    }
    if (n <= 0) {
        return 0
    }
    return 1 / (1 + simularityScore)
}
function getSimularity(userID) {
    let grouped = [];
    ratings.forEach(function (a) {
        this[a.UserID] || grouped.push(this[a.UserID] = []);
        this[a.UserID].push(a);
    }, Object.create(null));

    for (let i = 0; i < grouped.length; i++) {
        if (userID !== grouped[i][0].UserID) {
            euclidean(userID, grouped[i])
        }
    }
}


function getSimilarity(a, b) {
    if (a === 0) { return b; }
    if (b === 0) { return a; }

    // decrease and conqure - recursion
    return getSimilarity(b, a % b);
}

// euclidean('1')

module.exports = euclidean
module.exports = getSimilarity