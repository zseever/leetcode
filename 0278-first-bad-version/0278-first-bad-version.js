/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        leftPtr = 1
        rtPtr = n
        while (leftPtr < rtPtr) {
            midpoint = Math.floor((leftPtr + rtPtr)/2)
            if (isBadVersion(midpoint)) {
                rtPtr = midpoint
            } else {
                leftPtr = midpoint + 1
            }
        }
        return leftPtr
    };
};