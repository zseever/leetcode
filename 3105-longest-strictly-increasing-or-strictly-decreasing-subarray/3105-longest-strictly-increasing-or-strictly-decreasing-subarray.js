/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let res = 1
    let left = 0
    let right = 0
    let dir
    
    while (left < nums.length) {
        dir = nums[left+1] - nums[left]
        
        while ((dir > 0 && nums[right+1] > nums[right]) || (dir < 0 && nums[right+1] < nums[right]))  {
            if ((right-left)+2 > res) {
                res = (right-left)+2
            }
            right++        
        }
        
        left = left === right ? left + 1 : right
        right = left
        
    }
    
    return res
};