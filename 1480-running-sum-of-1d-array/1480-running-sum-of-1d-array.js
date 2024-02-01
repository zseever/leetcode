/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runSum = []
    nums.forEach((num,idx) => {
        if (idx === 0) {
            runSum.push(num)
        } else {
            runSum.push(runSum[idx-1]+num)
        }
    })
    return runSum
};