/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let right = 0
    let word = ''
    let tempArr = []
    
    while (right <= s.length) {
        if (s[right] === ' ' || right === s.length) {
            if (word.length) {
                tempArr.push(word)
                word = ''
            }
        } else {
            word = word + s[right]    
        }
        right++
    }
    
    return tempArr.reverse().join(' ')

};