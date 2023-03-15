/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i].toLowerCase() !== s[i].toUpperCase()) {
    //         newStr += s[i].toLowerCase()
    //     }
    // }
    console.log(newStr)
    return newStr === newStr.split('').reverse().join('')
    
};