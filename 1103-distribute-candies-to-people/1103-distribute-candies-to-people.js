/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let result = new Array(num_people)
    result.fill(0)
    let counter = 0
    
    while (candies > 0) {
        let base = counter === 0 ? 1 : (counter*num_people)+1
        for (let i=0; i < num_people; i++) {
            if (candies < base + i) {
                result[i] += candies
                candies = 0
                break
            } else {
                result[i] += base + i
                candies -= base + i
            }
        }
        counter++
    }
    
    return result
};

// 1,2,3 - 9,7,4
// 5,2,3 - 0,-,-