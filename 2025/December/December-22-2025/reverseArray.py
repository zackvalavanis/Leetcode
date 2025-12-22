
# Description
# Given an array, write a function that returns an array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
# Output: [5, 4, 3, 2, 1]
from typing import List

nums = [1, 2, 3, 4, 5]

def reverseArray(nums: List[int]) -> List[int]: 
  left = 0
  right = len(nums) -1 

  while left < right: 
    temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left+=1 
    right-=1
  return nums

print(reverseArray(nums))