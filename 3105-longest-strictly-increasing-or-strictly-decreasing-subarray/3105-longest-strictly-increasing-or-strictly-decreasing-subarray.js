/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let res = 1
    let left = 0
    let right = 0
    let direction
    
    while (left < nums.length) {
        direction = nums[left+1] - nums[left]
        
        while ((direction > 0 && nums[right+1] > nums[right]) || (direction < 0 && nums[right+1] < nums[right]))  {
            if ((right-left)+2 > res) {
                res = (right-left)+2
            }
            right++        
        }  

        // if (direction > 0) {
        //     while (nums[right+1] > nums[right]) {
        //         if ((right-left)+2 > res) {
        //             res = (right-left)+2
        //         }
        //         right++        
        //     }  
        // } else if (direction < 0) {
        //     while (nums[right+1] < nums[right]) {
        //         if ((right-left)+2 > res) {
        //             res = (right-left)+2
        //         }
        //         right++
        //     }              
        // }
        left += 1
        right = left
        
    }
    
    return res
};