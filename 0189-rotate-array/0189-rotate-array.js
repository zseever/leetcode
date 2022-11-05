/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (k > nums.length) {
        k -= nums.length
    }
    let slicedNums = nums.splice(nums.length-k,k)
    nums.unshift(...slicedNums)
};