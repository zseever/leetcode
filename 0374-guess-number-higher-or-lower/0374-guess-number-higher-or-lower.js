/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lower = 1
    let upper = n
    let choice = Math.floor((upper + lower)/2)
    while (guess(choice)) {
        if (guess(choice) === 1 ) {
            lower = choice + 1
        } else if (guess(choice) === -1) {
            upper = choice - 1
        } 
        choice = Math.floor((upper + lower)/2)
    }
    return choice
};