/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // "G()(al)G"
    //  Goal
    // for each letter in command (identify letters)
    // if G, add G to newStr
    // if char === '(', check i+1 to see if ')' or 'a'
    // if i+1 === ')', add 'o' to newStr and increment i by 1 (i++)
    // if i+1 === 'a', add 'al' to newStr and increment i by 3 (i += 3)
    let newStr = ''
    
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            newStr += 'G'
        } else if (command[i] === '(') {
            if (command[i+1] === ')') {
                newStr += 'o'
                i++
            } else {
                newStr += 'al'
                i += 3
            }
        }
    }
    
    return newStr
    
};