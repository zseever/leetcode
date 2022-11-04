/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
//     let foundResults = {}
//     let answer
//     for (let i = 0; i < numbers.length; i++) {
//         let resultMatch = target - numbers[i]
//         if (foundResults[numbers[i]]) {
//             answer = [foundResults[numbers[i]], i + 1]
//         } else {
//             foundResults[resultMatch] = i + 1
//         }
        
//     }
//     return answer
    let left = 0
    let right = numbers.length-1
    let pointerSum = numbers[left] + numbers[right]
    while (pointerSum !== target) {
        if (pointerSum > target) {
            right--
        } else if (pointerSum < target) {
            left++
        }
        pointerSum = numbers[left] + numbers[right]
    }
    return [left+1, right+1]
};