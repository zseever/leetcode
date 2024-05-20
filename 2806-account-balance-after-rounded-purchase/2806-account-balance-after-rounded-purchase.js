/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    purchaseAmount = Math.round(purchaseAmount/10) * 10
    
    return 100 - purchaseAmount
};