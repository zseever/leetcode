/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let seen = {}
    for (let i = 1; i < nums.length + 1; i++) {
        seen[i] = false
    }
    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = true
        }
    }
    let newArr = []
    for (const val in seen) {
        if (!seen[val]) {
            newArr.push(val)
        }
    } 
    return newArr
};