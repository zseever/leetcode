/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    // if lengths are not equal between a & b, return length of the largest
    // if values are equal, return -1
    // otherwise return length of a
    
    if (a.length !== b.length) {
        return Math.max(a.length, b.length)
    } else if (a === b) {
        return -1
    } else {
        return a.length
    }
};