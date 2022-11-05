/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    let reverseStringArr = []
    for (let i = 0; i < s.length; i++) {
        let word = s[i].split('')
        let reverseWord = []
        word.forEach(letter => reverseWord.unshift(letter))
        reverseStringArr.push(reverseWord.join(''))
    }
    let reverseString = reverseStringArr.join(' ')
    return reverseString
};