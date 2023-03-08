/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let left = 0
    // let right = 0
    while (left < haystack.length) {
            console.log('left value: '+left)
            console.log(haystack.slice(left,left+needle.length))
            console.log(needle === haystack.slice(left,left+needle.length))
        if (needle === haystack.slice(left,left+needle.length)) {
            return left
        } else {
            left++
        }

        // if (needle === haystack.slice(left,right+1)) {
        //     return left
        // }
    }
    return -1
    
};