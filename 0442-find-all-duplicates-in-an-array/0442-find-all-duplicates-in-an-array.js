/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let hash = {}
    let res = []
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] > 0 ? hash[nums[i]] + 1 : 1
    }

    for (const prop in hash) {
        if (hash[prop] > 1) {
            res.push(prop)
        }
    }
    return res
    
    
};