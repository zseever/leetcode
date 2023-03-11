/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = {}
    for (let i=0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] ? hash[s[i]]+1 : 1
    }
    for (let i=0; i < t.length; i++) {
        hash[t[i]]--
    }
    for (const prop in hash) {
        if (hash[prop] === -1 || isNaN(hash[prop])) {
            return prop
        }
    }
};