/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = s.split('')
    let left = 0
    let right = 0
    let longestSubStr = 0
    let curSubStrLen = 0
    let prevSeen = {}
    while (longestSubStr < s.length - left) {
        let curChar = (s[right] === ' ') ? 'space' : s[right]
        if (prevSeen[curChar] >= left || !curChar) {
            left = prevSeen[curChar] + 1
            prevSeen[curChar] = right
            right++
            curSubStrLen = right - left         
        } else {
            prevSeen[curChar] = right
            curSubStrLen++
            right++
        }
        if (longestSubStr < curSubStrLen) {
            longestSubStr = curSubStrLen
        }
        console.log(`${curChar} - ${curSubStrLen} - ${longestSubStr}`)
    }
    return longestSubStr
};