/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let left = 0
    while (left < haystack.length) {
        if (needle === haystack.slice(left,left+needle.length)) {
            return left
        } else {
            left++
        }
    }
    return -1
    
};