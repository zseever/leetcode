/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            nums[i] = 0
        }
    }
    console.log(nums)
    for (let i=0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i])-1] === 0) {
            nums[Math.abs(nums[i])-1] = -(nums.length+1)
        } else if (nums[Math.abs(nums[i])-1] > 0) {
            nums[Math.abs(nums[i])-1] *= -1
        } 
    }
    console.log(nums)
    for (let i=0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            return i+1
        }
    }
    return nums.length + 1
};