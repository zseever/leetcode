/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = []
    let curInt
    
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
            
        } else if (intervals[i][0] > newInterval[1]) {
            res.push(newInterval)
            return [...res, ...intervals.slice(i)]
            
        } else {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
        }
    }
    res.push(newInterval)
    
    
    return res
      
};
