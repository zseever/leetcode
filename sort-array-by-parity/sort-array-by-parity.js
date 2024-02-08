/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] % 2  !== 0) {
            let tempNum = nums.splice(i,1)
            nums.push(tempNum)
            length--
            i--
        }
    }
    return nums
};