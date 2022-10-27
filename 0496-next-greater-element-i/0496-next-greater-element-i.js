/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
   let numsGtrEle = {}
   let numsToMatch = []
   let nextGtrEle = []
   nums2.forEach(num => {
       let firstValue = numsToMatch[numsToMatch.length-1]
       while (firstValue < num) {
               numsGtrEle[firstValue] = num
               numsToMatch.pop()
               firstValue = numsToMatch[numsToMatch.length-1]
       }
       numsToMatch.push(num)
   })
   numsToMatch.forEach(num => {
       numsGtrEle[num] = -1
   })
   nums1.forEach(num => {
       nextGtrEle.push(numsGtrEle[num])
   })
   return nextGtrEle
   
};