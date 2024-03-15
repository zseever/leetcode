/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = []
    let postfix = new Array(nums.length).fill(1)
    let result = []
    let product = 1
    let product2 = 1
    for (let i=0; i < nums.length; i++) {
        product *= nums[i]
        prefix.push(product)      
        
        product2 *= nums[nums.length-1-i]
        postfix[nums.length-1-i] = product2
    }
    // product = 1
    // for (let i=nums.length-1; i >= 0; i--) {
    //     product *= nums[i]
    //     postfix[i] = product
    // }
    for (let i=0; i < nums.length; i++) {
        let val
        if (i === 0) {
            val = 1 * postfix[i+1]
        } else if (i === nums.length-1) {
            val = prefix[i-1] * 1
        } else {
            val = prefix[i-1] * postfix[i+1]
        }
        result.push(val)
    }
    
    
    return result
};