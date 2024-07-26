/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let res = []
    for (let i = 0; i < image.length; i++) {
        let newArr = []
        for (let j = image[i].length-1; j >= 0; j--) {
            newArr.push(image[i][j])
        }
        res.push(newArr)
    }
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            res[i][j] = res[i][j] === 1 ? 0 : 1
        }
    }
    
    return res
};