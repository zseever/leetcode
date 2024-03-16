/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // keep track of zeroes and ones as we iterate
    // for each iteration, store the diff btwn zeroes and ones at an index if
    //      it does not exist already in a hash map
    // for each iteration, if zeroes = ones then we know it is the largest current value
    // if zeroes != ones, we want to check our hashmap to see if there was a subarr with the same               diff as current. we check our current index minus the index where that exists to see if             that is larger than our current max length    
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
