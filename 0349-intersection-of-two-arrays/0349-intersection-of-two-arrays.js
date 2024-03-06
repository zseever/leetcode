/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1Vals = {}
    let overlapVal = []
    nums1.forEach(num => {
        nums1Vals[num] = nums1Vals[num] ? nums1Vals[num]++ : 1
    })
    nums2.forEach(num => {
        if (nums1Vals[num] > 0) {
            overlapVal.push(num)
            nums1Vals[num] = 0
        }
    })
    return overlapVal
};