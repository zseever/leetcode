/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let res = []
    for (let i=1; i <= num; i++) {
        let temp = i.toString()
        temp = temp.split('')
        let counter = 0
        temp.forEach(val => {
            counter += Number(val)
        })
        if (counter % 2 === 0) {
            res.push(i)
        }
    }
    
    return res.length
};