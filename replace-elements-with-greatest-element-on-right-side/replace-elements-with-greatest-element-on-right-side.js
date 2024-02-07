/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let highestVal = -1
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] > highestVal) {
                highestVal = arr[j]
            }
        }
        arr[i] = highestVal
    }
    return arr
};