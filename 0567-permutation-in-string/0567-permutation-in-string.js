/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    s1 = s1.split('')
    s2 = s2.split('')
    let seenVals = {}
    s1.forEach(val => {
        seenVals[val] = (seenVals[val] || 0) + 1
    })
    let left = 0
    let right = 0
    let requiredLen = s1.length
    while (right < s2.length) {
        if (seenVals[s2[right]] > 0) {
            requiredLen--
        }
        seenVals[s2[right]]--
        right++
        if (requiredLen === 0) return true
        if (right-left === s1.length) {
            if (seenVals[s2[left]] >= 0) requiredLen++
            seenVals[s2[left]]++
            left++
        }
    }
    return false
};