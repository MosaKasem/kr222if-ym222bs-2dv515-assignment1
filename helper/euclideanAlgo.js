'use strict'

const fs = require('fs')
const ratings = require('../ratings.json')
const users = require('../users.json')

function euclidean(userA, userB) {
    // console.log('userB: ', userB);
    // console.log('userB: ', ...userB);

    let sim = 0
    let n = 0
    let newArr = [];
    let euclideanObj = {}
    
    const chosenUser = ratings.filter(e => e.UserID === userA) // only the chosen user
    // const filteredList = ratings.filter(e => e.UserID === userB) // everyone except root user

    // console.log('filteredList: ', filteredList);
    
    for (let rootUser of chosenUser) {
        for (let currentUser of userB) {
            console.log('currentUser: ', currentUser);
            if (rootUser.Movie === currentUser.Movie) { // if its same movie
                sim += getSimilarity(parseFloat(rootUser.Rating), parseFloat(currentUser.Rating))
                n += 1
            }
        }
    }
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
    euclidean("1", grouped[i])
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