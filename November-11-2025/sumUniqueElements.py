
# Code
# Testcase
# Test Result
# Test Result
# Leet
# 1748. Sum of Unique Elements
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

# Return the sum of all the unique elements of nums.
# Example 1:

# Input: nums = [1,2,3,2]
# Output: 4

from typing import List
from collections import defaultdict

nums = [1,2,3,2]

def sumUnique(nums: List[int]) -> int: 
  counts = defaultdict(int)
  sum = 0

  for i in range(len(nums)): 
    counts[nums[i]] += 1
  
  for key, val in counts.items(): 
    if val == 1: 
      sum += key
  return sum

print(sumUnique(nums))


