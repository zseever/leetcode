/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let negatives = []
    let newArr = []
    let idx = 0
    while (nums[idx] < 0) {
        negatives.push(nums[idx]**2)	
        idx++
    }
    if (idx >= nums.length) {
        for (let i = negatives.length-1; i >= 0; i--) {
            newArr.push(negatives[i])
            negatives.pop()
        }
    } else {
        for (let i = idx; i < nums.length; i++) {
            if (negatives[negatives.length-1] <= nums[i]**2) {
                newArr.push(negatives[negatives.length-1])
                negatives.pop()
                i--
            } else {
                newArr.push(nums[i]**2)
            }
        }        
    }
    while (negatives.length) {
        newArr.push(negatives[negatives.length-1])
        negatives.pop()
    }

    return newArr    
    
    // let squaredNums = []
    // for (let i = 0; i < nums.length; i++) {
    //     squaredNums.push(nums[i]**2)
    // }
    // squaredNums.sort((a,b) => a-b)
    // return squaredNums
};