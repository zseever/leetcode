/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false
    let maxVal = 0;
    let peakHit = false
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
        if (arr[i] <= arr[i-1] && i-1 === 0) {
            console.log('condition 1 hit: '+i)
            return false
        } else if (arr[i] === arr[i-1]) {
            return false
        } else if (!peakHit && arr[i] <= arr[i-1]) {
            peakHit = true
        } else if (peakHit && arr[i] >= arr[i-1]) {
            console.log('condition 2 hit: '+i)
            return false
        } 
    }
    if (peakHit) {
        return true
    } else {
        return false
    }
};