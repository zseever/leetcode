/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let result = []
    
    for (let i = 0; i < img.length; i++) {
        let tempRes = []
        
        for (let j = 0; j < img[i].length; j++) {
            let counter = 1
            let total = img[i][j]
            // check 8 surrounding squares, if direction is valid increment counter and subtotal
            if (j > 0 && img[i][j-1] >= 0) {
                counter++
                total += img[i][j-1]
            }
            if (j < img[i].length-1 && img[i][j+1] >= 0) {
                counter++
                total += img[i][j+1]
            }
            if (i > 0 && img[i-1][j] >= 0) {
                counter++
                total += img[i-1][j]
            }
            if (i < img.length-1 && img[i+1][j] >= 0) {
                counter++
                total += img[i+1][j]
            }
            if (i > 0 && j > 0 && img[i-1][j-1] >= 0) {
                counter++
                total += img[i-1][j-1]
            }
            if (i > 0 && j < img[i].length-1 && img[i-1][j+1] >= 0) {
                counter++
                total += img[i-1][j+1]
            }
            if (i < img.length-1 && j > 0 && img[i+1][j-1] >= 0) {
                counter++
                total += img[i+1][j-1]
            }
            if (i < img.length-1 && j < img[i].length-1 && img[i+1][j+1] >= 0) {
                counter++
                total += img[i+1][j+1]
            }
            
            console.log(total,'-',counter)
            tempRes.push(Math.floor(total/counter))
        }
        
        result.push(tempRes)
    }
    
    return result
};