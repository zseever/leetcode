/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const rLkup = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let total = 0
    s = s.split('')
    // if the value next to i is v or x, add 4 or 9 to the total and skip past i + the next
    // if the value next to x is L or c, add 40 or 90 to the total and skip past i + the next
    // if the value next to c is D or M, add 400 or 900 to the total and skip past i + the next
    for (let i = 0; i < s.length; i++) {
        if (rLkup[s[i]] < rLkup[s[i+1]]) {
            total += rLkup[s[i+1]] - rLkup[s[i]]
            i++
        } else {
            total += rLkup[s[i]]
        }
    }
    
    
    
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
    //         if (s[i+1] === 'V') {
    //             total += 4
    //             i++
    //         } else if (s[i+1] === 'X') {
    //             total += 9
    //             i++
    //         }
    //     } else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) {
    //         if (s[i+1] === 'L') {
    //             total += 40
    //             i++
    //         } else if (s[i+1] === 'C') {
    //             total += 90
    //             i++
    //         }
    //     } else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
    //         if (s[i+1] === 'D') {
    //             total += 400
    //             i++
    //         } else if (s[i+1] === 'M') {
    //             total += 900
    //             i++
    //         }
    //     } else {
    //         total += rLkup[s[i]]
    //     }
    // }
    return total
}













































// var romanToInt = function(s) {
//     let total = 0;
//     for (let i = 0; i < s.length; i++)
//         // I conditions
//         if (s[i] === 'I') {
//             if (s[i+1] === 'V') {
//                 total += 4
//                 i++
//             } else if (s[i+1] === 'X') {
//                 total += 9
//                 i++
//             } else {
//                 total += 1
//             }
//         }
//         // V conditions
//         else if (s[i] === 'V') {
//             total += 5
//         }
//         // X conditions
//         else if (s[i] === 'X') {
//             if (s[i+1] === 'L') {
//                 total += 40
//                 i++
//             } else if (s[i+1] === 'C') {
//                 total += 90
//                 i++
//             } else {
//                 total += 10
//             }
//         }
//         // L conditions
//         else if (s[i] === 'L') {
//             total += 50
//         }
//         else if (s[i] === 'C') {
//             if (s[i+1] === 'D') {
//                 total += 400
//                 i++
//             } else if (s[i+1] === 'M') {
//                 total += 900
//                 i++
//             } else {
//                 total += 100
//             }
//         }
//         else if (s[i] === 'D') {
//             total += 500
//         }
//         else if (s[i] === 'M') {
//             total += 1000
//         }
//     return total
// };