/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    function signFunc(x) {
        if (x > 0) {
            return 1
        } else if (x < 0) {
            return -1
        } else {
            return 0
        }
    }
    let product = 1
    nums.forEach(num => {
        product *= num
    })
    return signFunc(product)
};