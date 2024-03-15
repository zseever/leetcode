/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let prefix = []
    let postfix = new Array(n).fill(1)
    let result = []
    let product = 1
    let product2 = 1
    for (let i=0; i < n; i++) {
        product *= nums[i]
        prefix.push(product)      
        
        product2 *= nums[n-1-i]
        postfix[n-1-i] = product2
    }
    for (let i=0; i < n; i++) {
        if (i === 0) {
            result.push(1 * postfix[i+1])
        } else if (i === n-1) {
            result.push(val = prefix[i-1] * 1)
        } else {
            result.push(val = prefix[i-1] * postfix[i+1])
        }
    }
    
    
    return result
};