from typing import List

nums = [1,2,3,4]
target = 3

def twoSum(nums: List[int], target: int) -> List[int]:
  left = 0; 
  right = len(nums) - 1

  while(left < right):
    sum = nums[left] + nums[right]

    if sum > target: 
      right-= 1
    elif sum < target: 
      left += 1
    else: 
      return [left + 1, right + 1]


print(twoSum(nums, target))