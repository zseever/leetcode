/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] ? hash[nums[i]] + 1 : 1
        if (hash[nums[i]] > nums.length/2) {
            return nums[i]
        }
    }
};