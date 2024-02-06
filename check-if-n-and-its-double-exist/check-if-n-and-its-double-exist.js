/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] < arr.length && arr[i] > 0) {
        //     hashMap[arr[i]] = i  
        // }
        if ((hashMap[arr[i]/2] >= 0 || hashMap[arr[i]*2] >= 0)
           && hashMap[arr[i]/2] != i) {
            return true
        }
        hashMap[arr[i]] = i
    }
    return false
};