/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => (b-a))
    while (nums.length > 2) {
        if (nums[0] < nums[1] + nums[2]) {
            return nums[0] + nums[1] + nums[2]
        }
        nums.shift()  
    }
    return 0
};