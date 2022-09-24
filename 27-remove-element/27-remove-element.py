class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        def myFunc(e):
            return len(str(e))
        
        for idx,num in enumerate(nums):
            if num == val:
                nums[idx] = ''
                
        nums.sort(key=myFunc,reverse=True)
        k = sum(1 for x in nums if x != '')
        return k