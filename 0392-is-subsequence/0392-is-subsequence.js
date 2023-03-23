/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s == t) return true
    // let newStr = ''
    // for (let i = 0; i < t.length; i++) {
    //     if (s.includes(t[i])) {
    //         newStr += t[i]
    //     }
    // }
    // if (s === newStr) {
    //     return true
    // } else {
    //     return false
    // }
    let left = 0
    while (left < t.length) {
        if (s[left] === t[left]) {
            left++
        } else if (s[left] !== t[left]) {
            // t = t.split('')
            // t.splice(left,1)
            // t = t.join('')
            t = t.slice(0,left) + t.slice(left+1)
            
        }
        if (s === t.slice(0,left+1)) {
            return true
        }
    }
    return false
    
};