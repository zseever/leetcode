/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 1) return 1
    points.sort((subArrA, subArrB) => {
        if (subArrA[0] > subArrB) {
            return 1
        } else if (subArrA[0] < subArrB[0]) {
            return -1
        } else {
            return 0
        }
    })
    let curVal
    let intervals = 0
    for (let i=0; i < points.length; i++) {
        curVal = points[i][1]
        let j = i+1
        while (j < points.length && curVal >= points[j][0]) {
            curVal = Math.min(curVal, points[j][1])
            j++
        }
            i = j-1
            intervals++
    }
    return intervals
};