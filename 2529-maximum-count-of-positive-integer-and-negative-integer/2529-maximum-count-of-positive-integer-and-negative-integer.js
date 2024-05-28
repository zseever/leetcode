/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0
    let neg = 0
    
    for (let i = 0; i < nums.length; i++) {
        pos += nums[i] > 0 ? 1 : 0
        neg += nums[i] < 0 ? 1 : 0
    }
    
    return Math.max(pos,neg)
};