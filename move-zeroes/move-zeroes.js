/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arrNumLen = nums.length
    for (let i = 0; i < arrNumLen; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
            arrNumLen--
            i--
        }
    }
};