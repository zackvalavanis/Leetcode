# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

# Example 1:

# Input: nums = [3,0,1]

# Output: 2

# Explanation:
from typing import List

nums = [0,1]

def missing_number(nums: List[int]) -> int: 
  numbers = set(nums)
  for i in range(len(nums) + 1): 
    if(i not in numbers): 
      return i


print(missing_number(nums))
