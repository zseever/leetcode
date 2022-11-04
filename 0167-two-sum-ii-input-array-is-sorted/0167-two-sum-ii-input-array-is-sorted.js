/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let foundResults = {}
    let answer
    for (let i = 0; i < numbers.length; i++) {
        let resultMatch = target - numbers[i]
        if (foundResults[numbers[i]]) {
            answer = [foundResults[numbers[i]], i + 1]
        } else {
            foundResults[resultMatch] = i + 1
        }
        
    }
    // console.log(foundResults)
    return answer
    
};