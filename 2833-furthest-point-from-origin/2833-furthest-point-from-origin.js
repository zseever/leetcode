/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let loop1 = 0
    let loop2 = 0
    
    for (let i=0; i < moves.length; i++) {
        loop1 += moves[i] === 'L' ? -1 : 1
        loop2 += moves[i] === 'R' ? 1 : -1
    }
    
    return Math.max(Math.abs(loop2), Math.abs(loop1))
};