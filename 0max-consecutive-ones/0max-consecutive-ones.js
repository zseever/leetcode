/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0
    let curOnes = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curOnes++
        } else {
            curOnes = 0
        }
        if (curOnes > maxOnes) {
            maxOnes = curOnes
        }
    }
    return maxOnes
};