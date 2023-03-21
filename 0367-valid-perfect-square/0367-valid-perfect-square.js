/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // for (let i = 0; i <= Math.ceil(num/2); i++) {
    //     if (i * i === num) {
    //         return true
    //     }
    // }
    // return false
    let counter = 0
    let start = 0
    let end = Math.ceil(num/2)
    // let end = num
    let mid = Math.ceil((start + end)/2)
    while (start !== end) {
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
    if (mid * mid === num) {
            console.log(start,' ',mid,' ',end)
            return true
    }
    return false
};