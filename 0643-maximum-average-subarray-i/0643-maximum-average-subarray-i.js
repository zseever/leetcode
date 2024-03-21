/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0
    let right = 0
    let runningTotal = 0
    let maxAvg = null
    while (right < k-1) {
        runningTotal += nums[right]
        right++
    }
    while (left <= nums.length-k) {
        runningTotal += nums[right]
        let avg = runningTotal / k
        maxAvg = avg > maxAvg || maxAvg === null ? avg : maxAvg
        runningTotal -= nums[left]
        left++
        right++
    }
    return maxAvg
    
    
    
    // let rollingTotal = 0
    // let maxAverage = undefined
    // let counter = 0
    // let hash = {}
    // while (counter < k-1) {
    //     hash[counter] = nums[counter]
    //     rollingTotal += nums[counter]
    //     counter++
    // }
    // for (let i=counter; i < nums.length; i++) {
    //     hash[i] = nums[i]
    //     rollingTotal += nums[i]
    //     let average = rollingTotal / k
    //     if (maxAverage === undefined || average > maxAverage) {
    //         maxAverage = average
    //     }
    //     rollingTotal -= hash[i-(k-1)]  
    // }
    // return maxAverage
};