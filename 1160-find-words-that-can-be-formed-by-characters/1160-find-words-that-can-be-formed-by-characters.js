/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let hash = {}
    let hash2 = {}
    let result = 0
    
    for (let i = 0; i < chars.length; i++) {
        hash[chars[i]] = hash[chars[i]] ? hash[chars[i]] + 1 : 1
    }
    
    for (let i = 0; i < words.length; i++) {
        let clone = structuredClone(hash)
        let valid = true
        
        for (let j = 0; j < words[i].length; j++) {
             
            if (!clone[words[i][j]]) {
                valid = false
                break
            } else {
                clone[words[i][j]]--
            }
        }
        
        
        
        result += valid ? words[i].length : 0
    }
    
    return result
};