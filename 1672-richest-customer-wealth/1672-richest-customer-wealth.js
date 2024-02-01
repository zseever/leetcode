/**
 * @param {number[][]} accounts
 * @return {number}
 */


var maximumWealth = function(accounts) {
    let topWealth = 0;
    let wealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length ; j++) {
            if (j === 0) {
                wealth = accounts[i][j]
            } else {
                wealth += accounts [i][j]
            }
        }
        if (wealth > topWealth) {
            topWealth = wealth
        }
    }
    return topWealth
}









































/*
var maximumWealth = function(accounts) {
    let topWealth = 0
    for (let i = 0; i < accounts.length; i++) {
        let accountWealth = 0
        accounts[i].forEach(money => {
            accountWealth += money
        })
        if (accountWealth > topWealth) topWealth = accountWealth
    }
    return topWealth
};
*/