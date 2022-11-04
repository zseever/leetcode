/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charCounter = {}
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        (charCounter[s[i]]) ? charCounter[s[i]]++ : charCounter[s[i]] = 1
    }
    console.log(charCounter)
    for (let i = 0; i < s.length; i++) {
        if (charCounter[s[i]] === 1) return i
    }
    return -1
};