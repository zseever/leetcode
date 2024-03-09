/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let seconds = 0
    for (let i = 0; i < timeSeries.length; i++) {
        seconds += duration
        let prev = (duration - (timeSeries[i]-timeSeries[i-1]))
        if (prev > 0) {
            seconds -= prev
        }
    }
    return seconds
};