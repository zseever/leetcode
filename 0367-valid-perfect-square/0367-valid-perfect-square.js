/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0
    let end = Math.ceil(num/2)
    let mid = Math.ceil((start + end)/2)
    while (start !== end || (mid * mid === num)) {
        if (mid * mid === num) {
            console.log(start,' ',mid,' ',end)
            return true
        } else if (mid * mid > num) {
            end = mid - 1
        } else {
            start = mid
        }
        mid = Math.ceil((start + end)/2)
    }
    // if (mid * mid === num) {
    //         return true
    // }
    return false
};


    // for (let i = 0; i <= Math.ceil(num/2); i++) {
    //     if (i * i === num) {
    //         return true
    //     }
    // }
    // return false