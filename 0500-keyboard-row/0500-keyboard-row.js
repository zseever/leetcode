/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // create an object that stores each letters row location
    // loop through each word in the array
    // for each word, loop through each letter looking up the row location in our object. if the row number does not match the first char, break loop
    // if the row number matches the whole way through, add the current word to a new array that is returned
    let valid = []
    let rows = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m']]
    let letters = {}
    rows.forEach((row, idx) => {
        row.forEach(letter => {
            letters[letter] = idx+1 
        })
    })
    
    for (let i=0; i < words.length; i++) {
        let firstLoc = letters[words[i][0].toLowerCase()]
        for (let j=0; j < words[i].length; j++) {
            if (letters[words[i][j].toLowerCase()] !== firstLoc) {
                break
            } else if (j === words[i].length-1) {
                valid.push(words[i])
            }
        }
    }
    
    
    return valid
    
};