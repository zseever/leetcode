/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    if (nums.length === 0) return result
    let left = nums[0]
    let right = nums[0]
    // for loop through nums array
    // left & right are set to nums[0] initially
    // every time we loop, we increment right by +1 at the end of hte loop
    // each time we loop, we want to check if right = nums[i]
    // if they equal, we continue as normal
    // if they do not equal, we push a value to result array with structure "${left}->${right-1}"
    // we then set left equal to nums[i] and continue the above process
    for (let i = 0; i < nums.length; i++) {
        if (right !== nums[i]) {
            if (left !== right-1) {
                result.push(`${left}->${right-1}`)
            } else {
                result.push(`${left}`) 
            }
            left = nums[i]
            right = nums[i]
        }
        right++
    }
    if (left === right-1) {
        result.push(`${left}`)
    } else {
        result.push(`${left}->${right-1}`)
    }
    return result
};