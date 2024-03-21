/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length // 6
    let len2 = str2.length // 3
    function isDivisor(num1, num2) {
        return num1 % num2 === 0 
    }
    for (let i = Math.min(len1, len2); i >= 0; i--) {
        if (isDivisor(len1, i) && isDivisor(len2,i)) {
            if (len1 >= len2) {
                let subStr = str2.slice(0,i)
                if (subStr.repeat(len1/i) === str1 && subStr.repeat(len2/i) === str2) {
                    return subStr
                }
            } else if (len2 > len1) {
                let subStr = str1.slice(0,i)
                if (subStr.repeat(len1/i) === str1 && subStr.repeat(len2/i) === str2) {
                    return subStr
                }
            }
        }   
    }
    return ''
};