# Input: nums = [1,12,-5,-6,50,3], k = 4
# Output: 12.75000
# Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

from typing import List

nums = [1,12,-5,-6,50,3]
k = 4

def max_average_subarray(nums: List[int], k: int) -> float: 
  curr = 0
  
  for right in range(0, k): 
    curr += nums[right]

  max_subarray = curr

  for right in range(k, len(nums)): 
    curr += nums[right] - nums[right - k]

    max_subarray = max(max_subarray, curr)

  return max_subarray / k


print(max_average_subarray(nums, k))