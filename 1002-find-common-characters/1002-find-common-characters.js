/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(A) {
    const result = []
    const firstWordArr = [...A[0]]
    
    for(const letter of firstWordArr) {
        if(A.every(word => word.includes(letter))) {
            result.push(letter)
            A = A.map(word => word.replace(letter, ''))
        }
    }    
    
    return result
};