/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b) 
    let result = 0
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        let sum = nums[left]+nums[right]
        if (sum < k) {
            left++
        } else if (sum > k) {
            right--
        } else {
            result++
            left++
            right--
        }
    }
    return result
};

// 1, 3, 3, 3, 4
// 7 -> 