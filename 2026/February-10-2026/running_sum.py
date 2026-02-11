from typing import List
nums = [1,2,3,4]

def running_sum(nums: List[int]) -> List[int]: 
  prefix = [nums[0]]

  for i in range(1, len(nums)): 
    prefix.append(nums[i] + prefix[len(prefix) -1])
  return prefix

print(running_sum(nums))
