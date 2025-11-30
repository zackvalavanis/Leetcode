from typing import List

nums = [1,2,3,4]
target = 3

def two_sumii(nums: List[int], target: int) -> List[int]: 
  left = 0 
  res = []
  right = len(nums) - 1

  while left < right: 
    sum = nums[right] + nums[left]
    if sum < target: 
      left+=1
    elif sum > target: 
      right-=1
    else: 
      res = [nums[left], nums[right]]
      left+=1
      right-=1
  return res


print(two_sumii(nums, target))