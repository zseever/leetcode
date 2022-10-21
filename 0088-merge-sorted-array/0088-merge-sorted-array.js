/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // loop through nums1 and compare first value of nums2
    // while nums2 arr has length > 0
    // use a counter/index variable to track loop progress through nums1
    let idxCtr = 0
    let tempTest = 0
    while (nums2.length > 0) {
        if (nums1[idxCtr] >= nums2[0] || idxCtr === nums1.length-n) {
            nums1.splice(idxCtr,0,nums2[0])
            nums1.pop()
            nums2.shift()
            idxCtr++
            n--
        } else if (nums1[idxCtr] < nums2[0]) {
            idxCtr++
        } 
    }
};