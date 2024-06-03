/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let counter = 0
    for (let i=0; i < s.length; i++) {
        counter += s[i] === letter ? 1 : 0
    }
    
    return Math.floor((counter/s.length)*100)
};