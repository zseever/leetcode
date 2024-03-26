/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let s1 = Infinity
    let s2 = Infinity
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > s2) return true
        if (nums[i] > s1) s2 = Math.min(nums[i],s2)
        s1 = Math.min(nums[i],s1)
    }
    
    return false   
};


