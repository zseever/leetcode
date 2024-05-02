/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    // need to track 2 indices, start and current/end
    // while s[i] === s[j], continue looping
    // if they dont equal, check the length between i and j-1, if 3 or more, push the values into a result array
    // after that, update i to j
    
    let result = []
    let left = 0
    let right = 0
    
    while (right <= s.length) {
        if (s[left] !== s[right]) {
            if ((right - left) >= 3) {
                result.push([left,right-1])
            }
            left = right
        }
        
        right++
    }
    
    return result
};