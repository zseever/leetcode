/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let firstCaps
    let lowerCt = 0
    let upperCt = 0
    
    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            firstCaps = word[i] === word[i].toUpperCase() ? true : false
        }
        
        if (word[i] === word[i].toLowerCase()) {
            lowerCt++
        } else if (word[i] === word[i].toUpperCase()) {
            upperCt++
        }
    }
    
    if ((firstCaps === true && lowerCt === word.length-1)
        || upperCt === word.length
        || lowerCt === word.length) {
        
        return true
    } else {
        return false
    }
};