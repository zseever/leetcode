/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = []
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval)
            return [...res,...intervals.slice(i)]
        } else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    
    res.push(newInterval)
    
    return res
    
    
    
};

// [1,1] & [3,0]
    // loop through intervals
    // check the two values at each index to see if either are greater or equal to
    //      the left value of newInterval
    // store the index and subindex where this criteria was met
    // continue looping now to check the right value of newInterval
    // store the index and subindex where that was met
    // if our first stored index is on the right side, newInterval[left] will not be used
    // if first stored index is on left side, left side becomes newInterval[left]
    // the right side interval becomes newInterval[right]
    // new arr becomes [0,left intervals index], and then [n+1, right intervals index]
//     if (intervals.length === 0) return newInterval
//     let lIdx, rIdx
//     for (let i=0; i < intervals.length; i++) {
//         if (!lIdx && intervals[i][0] >= newInterval[0]) {
//             lIdx = [i,0]
//         } else if (!lIdx && intervals[i][1] >= newInterval[0]) {
//             lIdx = [i,1]
//         }
        
//         if (lIdx && intervals[i][0] > newInterval[1]) {
//             rIdx = [i-1,1]
//             break
//         } else if (lIdx && intervals[i][1] > newInterval[1]) {
//             rIdx = [i,0]
//             break
//         } else if (lIdx && intervals[i][0] === newInterval[1]) {
//             rIdx = [i,0]
//             break
//         } else if (lIdx && intervals[i][1] === newInterval[1]) {
//             rIdx = [i,1]
//             break
//         }      
//     }
//     if (lIdx[0] === rIdx[0] && lIdx[1] === rIdx[1]) {
//         console.log(lIdx, rIdx)
//         console.log(intervals[rIdx[0]][rIdx[1]])
//         intervals[rIdx[0]][rIdx[1]] = newInterval[1]
//         return intervals
//     } else if (lIdx[1] === 1 && lIdx[1] === rIdx[1]) {
//         intervals[lIdx[0]][1] = intervals[rIdx[0]][1]
//         return [...intervals.slice()]
//     }