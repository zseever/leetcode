/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let occ = 0
    let max = Math.max(...nums)
    let left = 0
    let right = 0
    let res = 0
    
    while (right < nums.length) {
        if (nums[right] === max) {
            occ += 1
        }
        
        while (occ >= k) {
            // once we hit a valid subarr, any value that comes after would auto be another subarr
            res += (nums.length - right)
            if (nums[left] === max) {
                occ -= 1
            }
            left += 1
        }
        
        right++
    }
    return res
};