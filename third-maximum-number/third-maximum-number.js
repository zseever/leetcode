/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // nums.sort((a,b) => b-a)
    let set = [...new Set(nums)]
    let num1, num2, num3
    // num1 = num2 = num3
    for (let i = 0; i< set.length; i++) {
        if (set[i] > num1 || num1 === undefined) {
            num3 = num2
            num2 = num1
            num1 = set[i]
        } else if (set[i] > num2 || num2 === undefined) {
            num3 = num2
            num2 = set[i]
        } else if (set[i] > num3 || num3 === undefined) {
            num3 = set[i]
        }
    }
    if (set.length < 3) {
        return num1
    } else {
        return num3
    }
    
    
    // return (set.length < 3) ? set[0] : set[2]
};