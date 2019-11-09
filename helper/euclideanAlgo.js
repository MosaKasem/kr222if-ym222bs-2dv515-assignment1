'use strict'

const fs = require('fs')
const ratings = require('../ratings.json')
const users = require('../users.json')

function euclidean(userID, userB) {
    // console.log('userB: ', userB);
    // console.log('userB: ', ...userB);

    let sim = 0
    let n = 0
    let newArr = [];
    let euclideanObj = {}
    
    const userA = ratings.filter(e => e.UserID === userID) // get user A ratings
    // const filteredList = ratings.filter(e => e.UserID === userB) // everyone except root user

    // console.log('filteredList: ', filteredList);
    
    for (let rootUser of userA) {
        for (let currentUser of userB) {
            if (rootUser.UserID === currentUser.UserID) {
                "Its same"
            }
            if (rootUser.Movie === currentUser.Movie) { // if its same movie
                // sim += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
                sim += Math.pow(rootUser.Rating - currentUser.Rating, 2)
                n += 1
            }
        }
    }
    console.log(sim)
    // console.log(ratings)
    // console.log(newArr)
}

let grouped = [];

ratings.forEach(function (a) {
this[a.UserID] || grouped.push(this[a.UserID] = []);
this[a.UserID].push(a);
}, Object.create(null));

for (let i = 0; i < grouped.length; i++) {
    // grouped[i];
    if ("1" !== grouped[i][0].UserID) {
        euclidean("1", grouped[i])
    }
}

function doEuclidean(rootUser) {
    // find similarity between root user and for each other user
    let activeUser;
    // ratings.map(e => {
    //     if (e.UserID !== rootUser)
    //     euclidean(rootUser, e.UserID)
    // })
}
// euclidean("4")



function getSimilarity(a,b) {
    if(a === 0) { return b;}
    if(b === 0) { return a;}

    // decrease and conqure - recursion
    return getSimilarity(b, a % b);
}

// euclidean('1')

module.exports = euclidean
module.exports = getSimilarity