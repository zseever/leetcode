/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a)
    let set = [...new Set(nums)]
    return (set.length < 3) ? set[0] : set[2]
};