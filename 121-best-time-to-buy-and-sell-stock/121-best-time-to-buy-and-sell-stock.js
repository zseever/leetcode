/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    let leftPtr = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[leftPtr] > maxProfit) maxProfit = prices[i] - prices[leftPtr];
        if (prices[i] < prices[leftPtr]) leftPtr = i;
    }
    return (maxProfit > 0 ? maxProfit : 0)
    
};