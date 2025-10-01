from typing import List 

nums = [1, 2, 3, 4, 5]

def reverseArray(nums:List[int]) -> List[int]:
  left = 0; 
  right = len(nums) -1

  while left < right:
   nums[left], nums[right] = nums[right], nums[left]
   left += 1
   right -= 1
  return nums


print(reverseArray(nums))