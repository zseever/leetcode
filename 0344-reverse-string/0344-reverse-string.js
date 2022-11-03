/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let stack = []
    while (s.length) {
        stack.push(s.shift())
    }
    while (stack.length) {
        s.push(stack.pop())
    }
    
};