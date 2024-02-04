/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenDigits = 0
    for (let i = 0; i < nums.length; i++) {
        let digitsLen = nums[i].toString().length
        evenDigits = digitsLen % 2 === 0 ? evenDigits + 1 : evenDigits
    }
    return evenDigits
};