/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 1
    // 1 1
    // 1 2 1
    // 1 3 3 1
    // 1 4 6 4 1
    // 1 5 10 10 5 1
    // 1 6 15 20 15 6 1
    const pascals = []
    for (let i = 1; i <= numRows; i++) {
        let pascalRow = []
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                pascalRow.push(1)
            } else {
                let pVal1 = pascals[i-2][j]
                let pVal2 = pascals[i-2][j-1]
                pascalRow.push(pVal1+pVal2)
            }
        }
        pascals.push(pascalRow)
    }
    return pascals
};