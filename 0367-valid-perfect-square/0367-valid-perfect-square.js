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
    // let end = Math.ceil(num/2)
    let end = num
    let mid = Math.ceil((start + end)/2)
    while (start !== end) {
    // while (counter < 10) {
        if (mid * mid === num) {
            console.log(start,' ',mid,' ',end)
            return true
        } else if (mid * mid > num) {
            // console.log('mid*mid greater than num')
            end = mid - 1
        } else {
            // console.log('mid*mid less than num')
            start = mid
        }
        mid = Math.ceil((start + end)/2)
        counter++
        // console.log(start,' ',mid,' ',end)
    }
    if (mid * mid === num) {
            console.log(start,' ',mid,' ',end)
            return true
    }
    return false
};