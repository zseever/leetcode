/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true
    s1 = s1.split('')
    s2 = s2.split('')
    let misMatchVals = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            misMatchVals.push([s1[i],s2[i]])
        }
    }
    if (misMatchVals.length === 2 
        && misMatchVals[0][0] === misMatchVals[1][1]
        && misMatchVals[0][1] === misMatchVals[1][0]) {
        return true
    } else {
        return false
    }
};