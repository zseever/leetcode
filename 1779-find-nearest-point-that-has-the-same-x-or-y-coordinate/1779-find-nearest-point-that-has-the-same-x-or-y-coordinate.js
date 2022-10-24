/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    const distData = {
        lowVal: 100000,
        idx: -1
    }
    points.forEach((point,idx) => {
        if (point[0] === x) {
            let tempDist = Math.abs(y - point[1])
            if (tempDist < distData.lowVal) {
                distData.lowVal = tempDist
                distData.idx = idx
            }
        }
        if (point[1] === y) {
            let tempDist = Math.abs(x - point[0])
            if (tempDist < distData.lowVal) {
                distData.lowVal = tempDist
                distData.idx = idx
            }
        }
    })
    return distData.idx
};