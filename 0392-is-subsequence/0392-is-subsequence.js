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
    let right = 0
    while (left < t.length) {
        // if s[left] = t[left], increment left
        // if s[left] != t[left], remove t[left] (no increment)
        // check if s = t[0:s.length]
        if (s[left] === t[left]) {
            left++
        } else if (s[left] !== t[left]) {
            // t = t.split('').splice(left,1).join('')
            t = t.split('')
            // console.log(t)
            t.splice(left,1)
            // console.log(t)
            t = t.join('')
            // console.log(t)
            // console.log('------')
            
        }
        if (s === t.slice(0,left+1)) {
            return true
        }
    }
    return false
    
};