/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let seen1 = {}
    let result = [[],[]]
    
    for (let i=0; i<nums1.length; i++) {
        seen1[nums1[i]] = true
    }
    
    let seen2 = {}
    
    for (let i=0; i<nums2.length; i++) {
        seen2[nums2[i]] = true
        if (!seen1[nums2[i]]) {
            result[1].push(nums2[i])
            seen1[nums2[i]] = true
        }
    }
    
    for (let i=0; i<nums1.length; i++) {
        if (!seen2[nums1[i]]) {
            result[0].push(nums1[i])
            seen2[nums1[i]] = true
        }
    }
    
    return result
};