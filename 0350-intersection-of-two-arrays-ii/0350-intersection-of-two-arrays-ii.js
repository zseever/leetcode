/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const arrVals = {}
    let overlapVals = []
    nums1.forEach(num => {
        if (arrVals[num]) {
            arrVals[num] += 1
        } else {
            arrVals[num] = 1
        }
    })
    nums2.forEach(num => {
        if (arrVals[num]) {
            overlapVals.push(num)
            arrVals[num]--
        }
    })
    return overlapVals
};