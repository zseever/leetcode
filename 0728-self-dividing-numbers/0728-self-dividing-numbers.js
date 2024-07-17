/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        let nums = i.toString().split('')
        for (let j = 0; j < nums.length; j++) {
            if (i % nums[j] !== 0) {
                break
            } else if (j === nums.length-1) {
                res.push(i)
            }
            
        }
    }
    return res
};