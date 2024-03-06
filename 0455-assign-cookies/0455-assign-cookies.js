/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let cookieIndex = 0
    let satisfied = 0
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    while (cookieIndex < s.length && satisfied < g.length) {
        if (s[cookieIndex] >= g[satisfied]) {
            satisfied++
        }
        cookieIndex++
    }
    return satisfied
}    