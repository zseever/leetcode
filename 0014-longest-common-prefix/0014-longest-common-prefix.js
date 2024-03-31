/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let counter = [];
    for (let i=0; i < strs[0].length;i++) {
        if (strs.every(x => x[i] === strs[0][i])) {
            counter.push(strs[0][i])  
        } else {
            break
        }
    }
    return counter.join('')
};