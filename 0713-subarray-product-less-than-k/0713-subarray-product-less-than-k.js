/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0
    let left = 0
    let right = 0
    
    let counter = 0
    let product = 1
    
    while (right < nums.length) {
        product *= nums[right]
        
        while (product >= k) {
            product /= nums[left]
            left++
        }   
        
        counter += (right-left) + 1
        right++
        
    }

    return counter
    
};

// 1
// 2
// 2
//