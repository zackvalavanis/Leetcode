
from typing import List

nums = [-1,0,2,4,6,8]
target = 4

#  time complexity: O(LogN)
#  Space complexity: O(1)

def binary_search_iterative(nums: List[int], target: int) -> int: 
  left, right = 0, len(nums) -1

  while left <= right: 
    middle = left + ((right - left) // 2)
    
    if nums[middle] > target: 
      right = middle - 1
    elif nums[middle] < target: 
      left = middle + 1
    else: 
      return middle
  return -1

print(binary_search_iterative(nums, target))