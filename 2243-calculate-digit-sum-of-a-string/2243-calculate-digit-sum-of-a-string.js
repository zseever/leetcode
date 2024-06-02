/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while (s.length > k) {
        let strs = []
        let right = k
        for (let i=0; i < s.length; i++) {
            let tempStr = s.slice(i,k+i)
            strs.push(tempStr)
            i += (k-1)
        }
        for (let i=0; i < strs.length; i++) {
            let counter = 0
            for (let j=0; j < strs[i].length; j++) {       
                counter += Number(strs[i][j])
            }
            strs[i] = counter.toString()
        }
        s = strs.join('')
        console.log(s)
    }
    
    return s
};