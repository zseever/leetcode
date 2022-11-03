/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let stack = []
    // while (s.length) {
    //     stack.push(s.shift())
    // }
    // while (stack.length) {
    //     s.push(stack.pop())
    // }
    let l = 0
    let r = s.length-1
    
    while (l < r) {
        s.splice(r+1,0,s[l])
        s.shift()
        r--
    }
    
    
};