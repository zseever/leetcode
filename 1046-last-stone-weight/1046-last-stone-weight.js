/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    while (stones.length > 1) {
        let min
        let max
        if (stones[0] > stones[1]) {
            min = 1
            max = 0
        } else {
            min = 0
            max = 1
        }
        for (let i = 2; i < stones.length; i++) {
            if (stones[i] > stones[max]) {
                min = max
                max = i
            } else if (stones[i] > stones[min]) {
                min = i
            }
        }
        let result = stones[min]-stones[max]
        
        if (result < 0) {
            stones[max] =  Math.abs(result)
            stones.splice(min,1)
        } else if (result > 0) {
            stones[min] = result
            stones.splice(max,1)
        } else {
            stones.splice(Math.max(min,max),1)
            stones.splice(Math.min(min,max),1)
        }
    }
    
    return stones[0] > 0 ? stones[0] : 0
};