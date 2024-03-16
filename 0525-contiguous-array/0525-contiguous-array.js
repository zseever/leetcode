/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let zeroes = 0
    let ones = 0
    let maxLen = 0
    let diff_idx = {}
    
    
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones++
        } else {
            zeroes++
        }
        
        if (diff_idx[zeroes-ones] === undefined) {
            diff_idx[zeroes-ones] = i
        }
        
        if (zeroes === ones) {
            maxLen = zeroes + ones
        } else {
            let idx = diff_idx[zeroes-ones]
            maxLen = Math.max(maxLen, i-idx)
        }
    }
    
    return maxLen
    
};

// [0,0,1,0,1,1,0]
// zero: 3
// one: 4
