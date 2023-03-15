/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    return newStr === newStr.split('').reverse().join('')
    
};