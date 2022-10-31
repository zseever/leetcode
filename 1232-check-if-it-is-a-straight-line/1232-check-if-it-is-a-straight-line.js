/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0]- coordinates[0][0])
    let b = coordinates[0][1] - (slope * coordinates[0][0])
    for (let i = 0; i < coordinates.length; i++) {
        let y = coordinates[i][1]
        let x = coordinates[i][0]
        if (slope === Infinity) {
            if (x !== coordinates[0][0]) return false
        } else if (slope === 0) {
            if (y !== coordinates[0][1]) return false
        } else if (!(y === (slope * x) + b)) { 
            return false
        }
        
        // if (i === 0) {
        //     if (coordinates[i+1][0]- x === 0) {
        //         slope = 0
        //         b = 0
        //     } else {
        //       slope = (coordinates[i+1][1] - y)/(coordinates[i+1][0]- x)
        //         b = y - (slope * x)  
        //     }    
        // }
        // if (y !== (slope * x) + b) return false
    }
    return true
};