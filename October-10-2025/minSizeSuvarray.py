from typing import List

nums = [1,2,3,5,7,6]
target = 5

def minSizeSub(nums: List[int], target: int) -> int: 
  left = 0 
  curr = 0
  min_length = float('inf')

  for right in range(0, len(nums)): 
    curr += nums[right]

    while curr >= target: 
      min_length = min(min_length, right - left + 1)
      curr -= nums[left]
      left += 1
  return 0 if min_length == float('inf') else min_length


print(minSizeSub(nums, target))


