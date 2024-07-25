/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let hash = {}
    let arrLen = arr.length
    for (let i = 0; i < arrLen; i++) {
        hash[arr[i]] = hash[arr[i]] ? hash[arr[i]]+1 : 1
        if (hash[arr[i]]/arrLen > .25) {
            return arr[i]
        }
    }
    return false
};