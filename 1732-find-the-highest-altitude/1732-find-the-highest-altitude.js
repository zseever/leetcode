/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefixSum = 0
    let max = 0
    for (let i=0; i < gain.length; i++) {
        prefixSum += gain[i]
        max = prefixSum > max ? prefixSum : max
    }
    max = prefixSum > max ? prefixSum : max
    return max
};