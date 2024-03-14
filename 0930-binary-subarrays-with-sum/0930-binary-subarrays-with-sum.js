/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    function helper(x) {
        if (x < 0) return 0
        
        let res = 0
        let l = 0
        let sum = 0
        
        for (let r=0; r < nums.length; r++) {
            sum += nums[r]
            while (sum > x) {
                sum -= nums[l]
                l += 1
            }
            res += (r - l + 1)
        }
        return res
    }
    
    
    return helper(goal) - helper(goal-1)
    
    // let subCtr = 0
    // for (let left = 0; left < nums.length; left++) {
    //     let right = left
    //     let sum = 0
    //     while (sum <= goal && right < nums.length) {
    //         sum += nums[right]
    //         right++
    //         if (sum === goal) {
    //             subCtr++  
    //         }
    //     }
    // }
    // return subCtr
};