/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    const intArr = n.toString().split('')
    intArr.forEach(num => {
        product *= Number(num)
        sum += Number(num)
    })
    return product-sum
};