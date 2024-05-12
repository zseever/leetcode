/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    // -4, -3, -1, 2, 5  k=2
    //  4, -3, -1, 2, 5  k=1
    //  4,  3, -1, 2, 5  k=0
    // while k > 0 loop
    // always prioritize changing negative to positive
    // if all values are positive, pick zero
    // if neither above exist, change the lowest value
    let result = 0
    let idx = 0

    nums.sort((a,b) => a-b)
    
    while (k > 0) {
        if (nums[idx] < 0) {
            nums[idx] *= -1
            idx++
        } else if (nums[idx] > 0) {
            if (nums[idx] > nums[idx-1]) {
                nums[idx-1] *= -1
            } else {
                nums[idx] *= -1   
            }      
        }
        
        if (idx >= nums.length) idx--
        
        k--
    }
    
    nums.forEach(num => {
        result += num
    })
    
    return result
};