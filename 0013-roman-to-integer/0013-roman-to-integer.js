/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++)
        // I conditions
        if (s[i] === 'I') {
            if (s[i+1] === 'V') {
                total += 4
                i++
            } else if (s[i+1] === 'X') {
                total += 9
                i++
            } else {
                total += 1
            }
        }
        // V conditions
        else if (s[i] === 'V') {
            total += 5
        }
        // X conditions
        else if (s[i] === 'X') {
            if (s[i+1] === 'L') {
                total += 40
                i++
            } else if (s[i+1] === 'C') {
                total += 90
                i++
            } else {
                total += 10
            }
        }
        // L conditions
        else if (s[i] === 'L') {
            total += 50
        }
        else if (s[i] === 'C') {
            if (s[i+1] === 'D') {
                total += 400
                i++
            } else if (s[i+1] === 'M') {
                total += 900
                i++
            } else {
                total += 100
            }
        }
        else if (s[i] === 'D') {
            total += 500
        }
        else if (s[i] === 'M') {
            total += 1000
        }
    return total
};