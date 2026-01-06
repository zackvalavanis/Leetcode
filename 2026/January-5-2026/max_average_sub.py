# You are given an integer array nums consisting of n elements, and an integer k.

# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

# Example 1:

# Input: nums = [1,12,-5,-6,50,3], k = 4

from typing import List

nums = [1,12,-5,-6,50,3] 
k = 4

def max_average_suv(nums: List[int], k: int) -> int: 
  left = 0
  curr = 0

  for right in range(0, k): 
    curr += nums[right]

  max_avg = curr

  for right in range(k, len(nums)): 
    curr += nums[right]
    curr -= nums[left]
    left +=1 
    max_avg = max(max_avg, curr)
  return max_avg / k

print(max_average_suv(nums, k))
