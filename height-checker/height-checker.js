/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights].sort((a,b) => { return a-b })
    let counter = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            counter++
        }
    }
    return counter
};