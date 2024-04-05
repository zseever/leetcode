/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     nums.sort()
//     for (let i=0; i < nums.length; i++) {
//         if (nums[i] === nums[i+1]) {
//             i++
//         } else {
//             return nums[i]
//         }
//     }
// };

var singleNumber = function(nums) {
    let uniNum = 0
    for (let i = 0; i < nums.length; i++) {
        uniNum = nums[i] ^ uniNum
    }
    return uniNum
};