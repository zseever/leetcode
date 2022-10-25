/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0
    let seenVals = {}
    while (true) {
        sum = 0
        if (seenVals[n]) {
            return false 
        }
        n.toString().split('').forEach(num => {
            sum += Number(num)**2
        })
        seenVals[n] = true
        n = sum
        if (n === 1) return true
    }
    
};