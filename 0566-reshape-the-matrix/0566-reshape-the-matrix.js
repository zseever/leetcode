/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let matFlat = mat.flat()
    if (r * c !== matFlat.length) return mat
    let reshapedArr = []
    while (r) {
        let rowArr = []
        for (let i = 0; i < c; i++) {
            rowArr.push(matFlat.shift())
        }
        reshapedArr.push(rowArr)
        r--
    }
    return reshapedArr
};