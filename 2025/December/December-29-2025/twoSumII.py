from typing import List

nums = [3,4,5,6]
target = 7

def two_sumII(nums: List[int], target: int) -> List[int]: 
  left = 0
  right = len(nums) -1

  while left < right: 
    sum = nums[left] + nums[right]

    if sum > target: 
      right-=1
    elif sum < target: 
      left+= 1
    else: 
      return [left, right]
  return []

print(two_sumII(nums, target))