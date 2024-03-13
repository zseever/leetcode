/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let range = [...Array(n+1).keys()]
    if (range.length === 1) return range[0]
    let left = 0
    let right = range.length-1
    let leftSum = range[left]
    let rightSum = range[right]
    while (left !== right) {
        if (leftSum > rightSum) {
            right -= 1
            rightSum += range[right]
        } else {
            left += 1
            leftSum += range[left]
        }
        console.log('index ',left,' - ',right)
        console.log('sum ',leftSum,' - ',rightSum)
    }
    if (leftSum === rightSum) {
        return left
    } else {
       return -1 
    }
};