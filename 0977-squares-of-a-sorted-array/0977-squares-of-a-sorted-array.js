/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = []
    for (let i = 0; i < nums.length; i++) {
        squaredNums.push(nums[i]**2)
    }
    squaredNums.sort((a,b) => a-b)
    return squaredNums
};