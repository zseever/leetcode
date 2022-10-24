/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let numLen = nums.length;
//     for (let i = 0; i < numLen; i++) {
//         for (let j = 0; j < numLen; j++) {
//             if (nums[i] + nums[j] === target) return [i,j]
//         }
//     }
// }

var twoSum = function(nums, target) {
    let mapIdx = {};
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        if (remain in mapIdx) {
            return [mapIdx[remain],i]
        } else {
            mapIdx[nums[i]] = i;
        }
    }
}