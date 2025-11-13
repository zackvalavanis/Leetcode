from typing import List

# 1512. Number of Good Pairs
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given an array of integers nums, return the number of good pairs.

# A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

# Example 1:

# Input: nums = [1,2,3,1,1,3]
# Output: 4

from collections import Counter

nums = [1,1,1,1]

def goodPairs(nums: List[int]) -> int: 
  freq = Counter(nums)
  count = 0

  for val in freq.values(): 
    count += val * (val - 1) // 2
  return count
    


print(goodPairs(nums))
