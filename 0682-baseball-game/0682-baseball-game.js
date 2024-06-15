/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let result = []
    for (let i=0; i < operations.length; i++) {
        let op = operations[i]
        let resLen = result.length
        if (op === '+') {
            result.push(result[resLen-1] + result[resLen-2])
        } else if (op === 'C') {
            result.pop()
        } else if (op === 'D') {
            result.push(result[resLen-1]*2)
        } else {
            result.push(Number(op))
        }
    }

    let sum = 0
    
    result.forEach(num => {
        sum += Number(num)
    })
    
    return sum
};