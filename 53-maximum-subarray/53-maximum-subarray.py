class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        contSum = 0
        maxSum = float('-inf')
        for num in nums:
            if contSum + num >= num:
                contSum += num
            else:
                contSum = num
                
            if contSum > maxSum:
                maxSum = contSum
                
        return maxSum