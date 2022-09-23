/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    s = s.split('')
    for (let i=0; i < s.length; i++) {
        if (['{','(','['].includes(s[i])) {
            stack.push(s[i])
        } else {
            if (['{}','()','[]'].includes(stack[stack.length-1]+s[i])) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return (!stack.length)
};