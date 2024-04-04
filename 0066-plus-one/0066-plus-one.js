/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length-1
    let carry = false
    let curIdx = len-1
    
    digits[len] = digits[len] === 9 ? 0 : digits[len] + 1
    
    if (digits[len] === 0) {
        carry = true
    }
    
    while (carry && curIdx >= 0) {
        digits[curIdx] = digits[curIdx] === 9 ? 0 : digits[curIdx] + 1
        if (digits[curIdx] !== 0) {
            carry = false
        } 
        curIdx--
    }
    
    if (digits[0] === 0) {
        digits.unshift(1)
    }
    
    return digits
};