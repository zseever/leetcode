/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    // goal is to sum up the value of all odd length subarrays
    // need a "sum" variable to track the above
    // need a temp arr variable to track and check for length and sum
    // loop through the provided arr and for each value, do a sub loop starting from that value
    let totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        let tempArr = []
        for (let j = i; j < arr.length; j++) {
            tempArr.push(arr[j])
            if (tempArr.length % 2 !== 0) {
                tempArr.forEach(num => totalSum += num)
                // console.log(`Odd numbered array: ${tempArr}`)
                // console.log(`Total sum so far is ${totalSum}`)
            }
            
        }
    }
    return totalSum
};