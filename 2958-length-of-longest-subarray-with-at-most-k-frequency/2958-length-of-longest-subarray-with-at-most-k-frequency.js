/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let hash = {}
    let left = 0
    let right = 0
    let res = 0
    
    while (left < nums.length) {
        // hash[nums[right]] = hash[nums[right]] >= 1 ? hash[nums[right]] + 1 : 1
        
        if (right < nums.length && (hash[nums[right]] < k || hash[nums[right]] === undefined)) {
            hash[nums[right]] = hash[nums[right]] >= 1 ? hash[nums[right]] + 1 : 1
            res = Math.max(res, (right-left)+1)
            right++
        } else {
            hash[nums[left]] = hash[nums[left]] > 0 ? hash[nums[left]] - 1 : 0
            left++
            // if (left === right) {
            //     right++
            // }
        }

    }
    return res === 0 ? 1 : res
};