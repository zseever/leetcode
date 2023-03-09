/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelList = []
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (['a','e','i','o','u','A','E','I','O','U'].includes(s[i])) {
            vowelList.push(s[i])
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (['a','e','i','o','u','A','E','I','O','U'].includes(s[i])) {
            s[i] = vowelList[vowelList.length-1]
            vowelList.pop()
        }
    }
    return s.join('')
};