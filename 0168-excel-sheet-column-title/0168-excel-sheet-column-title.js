/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let output = ""
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    while (columnNumber > 0) {
        output = alphabet[(columnNumber - 1) % 26] + output
        columnNumber = Math.floor((columnNumber - 1) / 26)
    }
    return output
};