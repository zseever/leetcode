/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    sArr = s.trim().split(' ')
    console.log(sArr.length)
    return sArr[sArr.length-1].length
};