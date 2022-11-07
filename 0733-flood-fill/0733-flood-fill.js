/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image
    fill(image, sr, sc, image[sr][sc], color)
    function fill(image,sr,sc, oldColor, newColor) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== oldColor) {
            return    
        }
        image[sr][sc] = newColor
        fill(image,sr-1,sc, oldColor, newColor)
        fill(image,sr+1,sc, oldColor, newColor)
        fill(image,sr,sc-1, oldColor, newColor)
        fill(image,sr,sc+1, oldColor, newColor)
    }
    return image
    
};