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
    
    while (right < nums.length) {
        hash[nums[right]] = (hash[nums[right]] || 0) + 1
        
        while (hash[nums[right]] > k) {
            hash[nums[left]]--
            left++
        }
        
        res = Math.max(res, (right-left)+1)
        right++
        
    }
    return res
};