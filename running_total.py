from typing import List
nums = [1, 2, 3, 4, 5]

def prefix_sum(nums: List[int]) -> List[int]: 
  prefix = [nums[0]]

  for i in range(1, len(nums)): 
    prefix.append(nums[i] + prefix[len(prefix) - 1])
  return prefix

print(prefix_sum(nums))

