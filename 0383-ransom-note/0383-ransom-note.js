/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = {}
    for (let i = 0; i < magazine.length; i ++) {
        let magLetter = magazine[i]
        hash[magLetter] = hash[magLetter] ? hash[magLetter] + 1 : 1
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let ranLetter = ransomNote[i]
        if (hash[ranLetter]) {
            hash[ranLetter]--
        } else {
            return false
        }
    }
    return true
};











































//     let hash = {}
//     ransomNote = ransomNote.split('')
//     magazine.split('').forEach(letter => {
//         hash[letter] ? hash[letter]++ : hash[letter] = 1
//     })
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (hash[ransomNote[i]]) {
//             hash[ransomNote[i]]--
//         } else {
//             return false
//         }
//     }
//     return true
// };