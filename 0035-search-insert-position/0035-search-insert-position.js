/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftPtr = 0
    let rtPtr = nums.length-1
    while (leftPtr < rtPtr ) {
        let midpoint = Math.floor((leftPtr+rtPtr)/2)
        if (nums[midpoint] < target) {
            leftPtr = midpoint + 1
        } else {
            rtPtr = midpoint
        }
    }
    if (nums[leftPtr] === target || nums[leftPtr] > target) {
        return leftPtr
    } else {
        return leftPtr+1
    }
};