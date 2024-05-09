/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n === 1) return true
    
    let temp = n
    while (temp >= 4) {
        if (temp === 4) return true
        
        temp /= 4
    }
    
    return false
};