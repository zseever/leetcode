/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let position = [0,0]
    
    moves = moves.split('')
    
    for (let i=0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            position[0] -= 1
        } else if (moves[i] === 'R') {
            position[0] += 1
        } else if (moves[i] === 'U') {
            position[1] -= 1
        } else {
            position[1] += 1
        }
    }
    
    return (position[0] === 0 && position[1] === 0)
};