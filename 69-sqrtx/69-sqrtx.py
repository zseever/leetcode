class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0
        left = 0
        right = x
        while True:
            mid = math.ceil((left+right)/2)
            if mid * mid == x:
                return mid
            elif right-left == 1:
                return left
            elif mid * mid > x:
                right = mid
            else:
                left = mid
        
        
        # for num in range(0,x+1):
        #     if num*num == x:
        #         return num
        #     elif num*num > x:
        #         return num-1