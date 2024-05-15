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
        console.log(min,'-',max)
        let result = stones[min]-stones[max]
        if (result < 0) {
            // max is greater than min
            // update stones[max] to abs(result)
            // delete stones[min]
            stones[max] =  Math.abs(result)
            stones.splice(min,1)
        } else if (result > 0) {
            // min is greater than max
            // update stones[min] to result
            // delete stones[max]
            stones[min] = result
            stones.splice(max,1)
        } else {
            // result is 0
            // delete stones[max]
            // delete stones[min]
            stones.splice(Math.max(min,max),1)
            stones.splice(Math.min(min,max),1)
        }
        console.log(stones)
    }
    
    return stones[0] > 0 ? stones[0] : 0
};