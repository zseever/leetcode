/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord = ''
    let index = 0
    while (word1 || word2) {
        if (index >= word1.length) {
            newWord += word2.slice(index)
            return newWord
        } else if (index >= word2.length) {
            newWord += word1.slice(index)
            return newWord
        }
        newWord += word1[index] + word2[index]
        index++
    }
};