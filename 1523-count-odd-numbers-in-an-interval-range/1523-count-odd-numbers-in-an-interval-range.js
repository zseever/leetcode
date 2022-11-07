/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // let oddCtr = 0
    // for (let i=low; i <= high; i++) {
    //     if (i%2 !== 0) oddCtr++ 
    // }
    if (high % 2 === 0) high--
    if (low % 2 === 0) low++
    return (high-low)/2 + 1
    // return oddCtr
};