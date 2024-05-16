/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    let seen = {}
    let res = []
    
    nums.sort((a,b) => a-b)
    
    while (nums.length) {
        let min = nums[0]
        let max = nums[nums.length-1]
        
        let temp = (min+max)/2
        
        if (!seen[temp]) {
            seen[temp] = true
            res.push(temp)
        }
        
        nums = nums.slice(1,nums.length-1)
    }
    
    return res.length
};