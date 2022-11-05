/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // check row
    for (let i = 0; i < 9; i++) {
        let tempHash = {}
        for (let j = 0; j < 9; j++) {
           if (tempHash[board[i][j]]) {
               console.log('row false flag')
               console.log(tempHash)
               return false
           } else {
               if (board[i][j] !== '.') {
                tempHash[board[i][j]] = 1                    
               }
           }
        }
    }
    // check column
    for (let i = 0; i < 9; i++) {
        let tempHash = {}
        for (let j = 0; j < 9; j++) {
           if (tempHash[board[j][i]]) {
               console.log('column false flag')
               console.log(tempHash)
               return false
           } else { 
               if (board[j][i] !== '.') {
                tempHash[board[j][i]] = 1                    
               }
           }
        }
    }
    // check squares
    let row = 3
    let col = 3
    while (row < 10) {
        let tempHash = {}
        for (let i = row-3; i < row; i++) {
            for (let j = col-3; j < col; j++) {
                if (tempHash[board[i][j]]) {
                   console.log('square false flag')
                    console.log(`${row} - ${col}`)
                   console.log(tempHash)
                   return false
               } else { 
                   if (board[i][j] !== '.') {
                    tempHash[board[i][j]] = 1                    
                   }
               }
            }
        }
        if (col === 9 && row < 10) {
            row += 3
            col = 3
        } else {
            col += 3
        }
        if (col === 9 && row === 9) {
            console.log(tempHash)
        }
    }
    return true
};