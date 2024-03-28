/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = {}
    
    for (let i=0;i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    
    let hash2 = {}
    
    for (const prop in hash) {
        if (hash2[hash[prop]]) return false
        
        hash2[hash[prop]] = true
    }
    
    return true
};