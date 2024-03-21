/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0
    for (let i=0; i < candies.length; i++) {
        maxCandies = maxCandies < candies[i] ? candies[i] : maxCandies
    }
    for (let i=0; i < candies.length; i++) {
        if (candies[i]+extraCandies >= maxCandies) {
            candies[i] = true
        } else {
            candies[i] = false
        }
    }
    return candies
};