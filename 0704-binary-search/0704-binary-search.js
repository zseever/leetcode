/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPtr = 0
    let rtPtr = nums.length-1
    while (leftPtr < rtPtr) {
        midpoint = Math.floor((leftPtr+rtPtr)/2)
        if (nums[midpoint] < target) {
            leftPtr = midpoint + 1
        } else {
            rtPtr = midpoint
        }
    }
    return nums[leftPtr] === target ? leftPtr : -1
};