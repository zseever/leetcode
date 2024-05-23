/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let loop1 = 0
    let loop2 = 0
    
    for (let i=0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            loop1 -= 1
            loop2 -= 1
        } else if (moves[i] === 'R') {
            loop1 += 1
            loop2 += 1
        } else {
            loop1 += 1
            loop2 -= 1
        }
    }
    
    return Math.max(Math.abs(loop2), Math.abs(loop1))
};