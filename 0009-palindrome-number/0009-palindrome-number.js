/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    x = x.toString()
    let left = 0
    let right = x.length-1
    while (left < right) {
        if (x[left] !== x[right]) {
            return false
        } else {
            left++
            right--
        }
    }
}









































var isPalindrome = function(x) {
    x = x.toString()
    let y = x.split('').reverse().join('');
    return (x === y)
};

// var isPalindrome = function(x) {
//     let tempNum = x;
//     let tempArr = [];
//     while (tempArr.length !== x.length) {
//         let digit = Math.floor(tempNum/(10**(tempNum.length-1)))
//         tempArr.push(digit)
//         // console.log(x,' ',tempArr)
//         tempNum -= (digit*(10**(tempNum.length-1)))
//     }
//     console.log(x,' ',tempArr)
// }