/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let mapIdx = Math.abs(nums[i]) - 1
        if (nums[mapIdx] < 0) {
            res.push(Math.abs(nums[i]))
        } else {
            nums[mapIdx] *= -1
        }
    }
    return res
};

// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,3,1]
// 