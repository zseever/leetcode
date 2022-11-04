/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = {}
    ransomNote = ransomNote.split('')
    magazine.split('').forEach(letter => {
        hash[letter] ? hash[letter]++ : hash[letter] = 1
    })
    // ransomNote.split('').forEach(letter => {
    //     if (hash[letter]) {
    //         hash[letter]--
    //     } else {
    //         return false
    //     }
    // })
    for (let i = 0; i < ransomNote.length; i++) {
        if (hash[ransomNote[i]]) {
            hash[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
};