/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i = 0; i <= Math.ceil(num/2); i++) {
        if (i * i === num) {
            return true
        }
    }
    return false
};