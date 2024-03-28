/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let seen = {}
    let res = 0
    
    for (let i=0; i < nums.length; i++) {
        let tar = k-nums[i]
        if (seen[tar] === undefined) {
            seen[tar] = [i]
        } else {
            seen[tar].push(i)
        }
    }   
    
    for (let i=0; i < nums.length; i++) {
        let tar = k-nums[i]
        if (seen[tar]?.length >= 1 && seen[nums[i]]?.length >= 1) {
            if (!(tar === nums[i] && seen[tar].length === 1)) {
                res++
                seen[tar].pop()
                seen[nums[i]].pop()  
            }
        }
    }
    
    return res
    
    
};