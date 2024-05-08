/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trusted = {}
    let trusts = {}
    
    for (let i = 0; i < trust.length; i++) {
        let trustee = trust[i][1] 
        trusted[trustee] = trusted[trustee] ? trusted[trustee] + 1 : 1
        trusts[trust[i][0]] = true
    }
    
    for (let i = 1; i <= n; i++) {
        if (!trusts[i] && (trusted[i] === n-1 || (trust.length === 0 && n === 1))) return i
    }
    
    return -1
};