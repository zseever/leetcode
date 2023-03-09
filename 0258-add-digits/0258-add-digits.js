/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        let tempNum = 0
        let tempVals = num + ''
        tempVals = tempVals.split('')
        tempVals.forEach(n => {
            tempNum += Number(n)
        })
        num = tempNum
        
    }
    return num
};