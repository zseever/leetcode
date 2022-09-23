/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const storedVals = {};
    for (i = 0; i < nums.length; i++) {
        console.log(storedVals[i]);
        if (storedVals[nums[i]]) {
            return true
        } else {
            storedVals[nums[i]] = true;
        }
    }
    return false
};