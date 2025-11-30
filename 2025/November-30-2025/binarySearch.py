# Binary Search
# Solved 
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

from typing import List
import bisect

nums = [-1,0,2,4,6,8]
target = 3

def binary_search1(nums: List[int], target: int) -> int: 
  index = bisect.bisect_left(nums, target)
  return index if index < len(nums) and nums[index] == target else -1

print(binary_search1(nums, target))

def binary_search2(nums: List[int], target: int) -> int: 
  left = 0
  right = len(nums)

  while left < right: 
    mid = left + ((right - left) // 2)

    if nums[mid] >= target: 
      right = mid
    elif nums[mid] < target: 
      left = mid + 1
  return left if (left < len(nums) and nums[left] == target) else -1

