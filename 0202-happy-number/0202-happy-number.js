/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = 0
    let counter = 0
    while (true) {
        sum = 0
        if (counter > 1000) {
            return false 
        }
        n.toString().split('').forEach(num => {
            sum += Number(num)**2
        })
        n = sum
        if (n === 1) return true
        counter++
    }
    
};