/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hash = {}
    let seen = {}
    
    for (let i = 0; i<s.length;i++) {
        if (hash[s[i]] !== undefined) {
            if (hash[s[i]] !== t[i]) return false
        } else if (seen[t[i]] !== undefined) {
            return false
        } else {
            hash[s[i]] = t[i] 
            seen[t[i]] = s[i]
        }
    }
    return true
};