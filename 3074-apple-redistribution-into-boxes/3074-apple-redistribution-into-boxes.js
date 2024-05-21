/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    apple.sort((a,b) => a-b)
    capacity.sort((a,b) => b-a)
    
    let capIdx = 0
    
    while (apple.length) {
        if (capacity[capIdx] >= apple[apple.length-1]) {
            capacity[capIdx] -= apple[apple.length-1]
            apple[apple.length-1] = 0
        } else {
            apple[apple.length-1] -= capacity[capIdx]
            capacity[capIdx] = 0
            capIdx++
        }
        
        if (apple[apple.length-1] === 0) {
            apple.pop()
        }
        
    }
    
    return capIdx+1
};