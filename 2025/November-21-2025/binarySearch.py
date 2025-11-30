

# You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

# Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

# Your solution must run in 
# O
# (
# l
# o
# g
# n
# )
# O(logn) time.

# Example 1:

# Input: nums = [-1,0,2,4,6,8], target = 4

# Output: 3

import bisect
from typing import List

nums = [-1,0,2,4,6,8]
target = 4

def binary_search(nums: List[int], target: int) -> int: 
  split = bisect.bisect_left(nums, target)
  return split if split < len(nums) and nums[split] == target else -1

print(binary_search(nums, target))


def binary_s(nums: List[int], target: int) -> int: 
  left = 0
  right = len(nums) -1

  while left <= right: 

    m = left + ((right - left) // 2)
    if nums[m] < target: 
      left = m + 1
    elif nums[m] > target: 
      right = m - 1
    else: 
      return m
  return -1 
    
print(binary_s(nums, target))