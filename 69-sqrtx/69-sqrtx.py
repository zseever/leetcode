class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0
        for num in range(0,x+1):
            if num*num == x:
                return num
            elif num*num > x:
                return num-1