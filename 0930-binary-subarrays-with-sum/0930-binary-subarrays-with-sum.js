/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let subCtr = 0
    for (let left = 0; left < nums.length; left++) {
        let right = left
        let sum = 0
        while (sum <= goal && right < nums.length) {
            sum += nums[right]
            right++
            if (sum === goal) {
                subCtr++  
            }
        }
    }
    return subCtr
};