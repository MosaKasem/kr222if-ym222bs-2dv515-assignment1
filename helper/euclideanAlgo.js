'use strict';

const ratings = require('../ratings.json')
const euclidean = (userID, userB) => {
asdasd
fasd
2

    let simularityScore = 0
    let n = 0

    const userA = ratings.filter(e => e.UserID === userID) // get user A ratings

    for (let rootUser of userA) {
        for (let currentUser of userB) {
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



module.exports.getSimularity = userID => {
    let resultArray = []
    let sorted = [];

    ratings.forEach(function (a) {
        this[a.UserID] || sorted.push(this[a.UserID] = []);
        
        this[a.UserID].push(a);
    }, Object.create(null));
    
    for (let i = 0; i < sorted.length; i++) {
        if (userID !== sorted[i][0].UserID) {
            let result = euclidean(userID, sorted[i])
            resultArray.push({result: result, id:sorted[i][0].UserID})
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

function euclideanWeight(userA, allUsers) {
    
}
