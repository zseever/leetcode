/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let seen = {}
    let res = 0
    
    for (let i=0; i < nums.length; i++) {
        let tar = k-nums[i]
        if (seen[tar] === undefined) {
            seen[tar] = [i]
        } else {
            seen[tar].push(i)
        }
    }   
    
    console.log(seen)
    
    for (let i=0; i < nums.length; i++) {
        let tar = k-nums[i]
        if (seen[tar]?.length >= 1 && seen[nums[i]]?.length >= 1) {
            if (tar === nums[i] && seen[tar].length === 1) {
                console.log('criteria met')
            } else {
                res++
                seen[tar].pop()
                seen[nums[i]].pop()  
            }
            //{ '2': [ 3 ], '3': [ 0, 2, 4 ], '5': [ 1 ] }

            
        }
    }
    
    return res
    
    
};