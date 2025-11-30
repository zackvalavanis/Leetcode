from typing import List

nums = [3,4,5,6]

target = 7

def two_sum(nums: List[int], target: int) -> List[int]:
  hash = {}

  for i in range(0, len(nums)):
    remainder = target - nums[i]

    if remainder in hash: 
      return [hash[remainder], i]
    else:
      hash[nums[i]] = i
  return []


print(two_sum(nums, target))