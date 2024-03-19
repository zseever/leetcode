/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let hash = {}
    let newArr = []
    for (let i=0; i < tasks.length; i++) {
        hash[tasks[i]] = hash[tasks[i]] ? hash[tasks[i]]+1 : 1
    }
    for (const prop in hash) {
        newArr.push(hash[prop])
    }
    newArr.sort((a,b) => a-b)
    let maxVal = newArr[newArr.length-1] - 1
    let idle = maxVal * n

    for (let i=newArr.length-2; i>=0; i--) {
        idle -= Math.min(maxVal, newArr[i])
    }
    return idle > 0 ? idle + tasks.length : tasks.length

};


//     let head
//     let curNode
//     for (const prop in hash) {
//         if (!head) {
//             head = {val: [prop, hash[prop]],
//                     next: null
//                    }
//             curNode = head
//         } else {
            
//         }
//     }