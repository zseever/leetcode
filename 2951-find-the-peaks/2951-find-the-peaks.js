/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let len = mountain.length
    let res = []
    
    for (let i = 0; i < len; i++) {
        if (i !== 0 && i !== len-1) {
            if (mountain[i-1] < mountain[i] && mountain[i+1] < mountain[i]) {
                res.push(i)
            } 
        }
    }
    
    return res
};