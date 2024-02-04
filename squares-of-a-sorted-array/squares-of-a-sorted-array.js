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
    
    // let stack = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] < 0) {
    //         stack.push(nums[i]**2)
    //         nums.shift()
    //         i--
    //     } else if (nums[i] > 0) {
    //         nums[i] = nums[i]**2
    //         while (nums[i] > stack[stack.length-1]) {
    //             nums.splice(i,0,stack.pop())
    //             i++
    //         }
    //     }
    //     if (!nums.length) {
    //         while (stack.length) {
    //             nums.push(stack.pop())
    //         }
    //         i = nums.length
    //     }
    // }
    // return nums
    
};