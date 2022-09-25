class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        inc = 1
        arr = []
        for digit in reversed(digits):
            if inc == 1:    
                if digit+inc < 10:
                    arr.insert(0,digit+1)
                    inc = 0
                else:
                    arr.insert(0,0)
            elif digit+inc < 10:
                arr.insert(0,digit)
            elif digit+inc == 10:
                arr.insert(0,0)
        if arr[0] == 0:
            arr.insert(0,1)
        return arr