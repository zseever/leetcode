/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }
    let left = 0 
    let right = 1
    let maxStr = ''
    let tempStr = ''
    let usedChars = {}
    while (maxStr.length < s.length-left) {
        // let subStr = s.slice(left,right)
        tempStr = tempStr + s[right-1]
        if (!usedChars[s[right-1]]) {
            if (tempStr.length > maxStr.length) {
                maxStr = tempStr
            }
            usedChars[s[right-1]] = true
            right++
        } else if (usedChars[s[right-1]]) {
            usedChars = {}
            left++
            right = left + 1
            tempStr = ''
        }
    }
    return maxStr.length
}









































// var lengthOfLongestSubstring = function(s) {
//     s = s.split('')
//     let left = 0
//     let right = 0
//     let longestSubStr = 0
//     let curSubStrLen = 0
//     let prevSeen = {}
//     while (longestSubStr < s.length - left) {
//         let curChar = (s[right] === ' ') ? 'space' : s[right]
//         if (prevSeen[curChar] >= left || !curChar) {
//             left = prevSeen[curChar] + 1
//             prevSeen[curChar] = right
//             right++
//             curSubStrLen = right - left         
//         } else {
//             prevSeen[curChar] = right
//             curSubStrLen++
//             right++
//         }
//         if (longestSubStr < curSubStrLen) {
//             longestSubStr = curSubStrLen
//         }
//     }
//     return longestSubStr
// };