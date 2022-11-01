/**
 * @param {number[][]} accounts
 * @return {number}
 */
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