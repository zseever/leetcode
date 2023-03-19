/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // if (s.length % 2 !== 0) return false
    let substr = s[0]
    let index = 1
    while (substr.length <= s.length/2) {
        repeats = s.length/substr.length
        // console.log(substr.repeat(repeats),' - ',s)
        if (substr.repeat(repeats) === s) {
            return true
        }
        substr = s.slice(0,index+1)
        index++
    }
    return false
};