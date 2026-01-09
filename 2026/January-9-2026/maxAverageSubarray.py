# You are given an integer array nums consisting of n elements, and an integer k.

# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

# Example 1:

# Input: nums = [1,12,-5,-6,50,3], k = 4
# Output: 12.75000
# Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75


nums = [1,12,-5,-6,50,3]
k = 4

from typing import List

def max_average_subarray(nums: List[int], k: int) -> int:
  left = 0
  max_sum = 0
  curr = 0
  
  for right in range(0, k):
    curr += nums[right]
  
  max_sum = curr

  for right in range(k, len(nums)):
    curr += nums[right] - nums[left]
    left += 1
    max_sum = max(max_sum, curr)
  return max_sum / k

print(max_average_subarray(nums, k))
    

def max_avg2(nums: List[int], k: int) -> int:
  left = 0 
  curr = 0

  for right in range(0, k): 
    curr += nums[right]

  max_sum = curr

  for right in range(k, len(nums)): 
    curr += nums[right] - nums[right - k]
    max_sum = max(max_sum, curr)
  return max_sum / k 

print(max_avg2(nums, k))

