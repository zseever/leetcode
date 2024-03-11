/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let hash = {}
    for (let i = 0; i < order.length; i++ ) {
        hash[order[i]] = i
    }
    console.log(hash)
    s = s.split('')
    s.sort((a,b) => {
        if (typeof(hash[a]) === 'undefined') {
            return -1
        } else if (hash[a] < hash[b]) {
            return -1
        } else if (hash[b] < hash[a]) {
            return 1
        } else {
            return 1
        }
    })
    s = s.join('')
    return s
};