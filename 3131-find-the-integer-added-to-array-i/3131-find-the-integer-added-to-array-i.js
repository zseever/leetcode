/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let min1 = nums1[0]
    let min2 = nums2[0]
    
    for (let i=0; i < nums1.length; i++) {
        min1 = nums1[i] < min1 ? nums1[i] : min1
        min2 = nums2[i] < min2 ? nums2[i] : min2
    }
    
    return min2-min1
};