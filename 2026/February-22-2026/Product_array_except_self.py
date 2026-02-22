# Products of Array Except Self
# Solved 
# Medium
# Topics
# Company Tags
# Hints
# Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

# Each product is guaranteed to fit in a 32-bit integer.

# Follow-up: Could you solve it in 
# O
# (
# n
# )
# O(n) time without using the division operation?

# Example 1:

# Input: nums = [1,2,4,6]

# Output: [48,24,12,8]

from typing import List 
nums = [1,2,4,6]

def products_nums_ex(nums: List[int]) -> List[int]: 
  n = len(nums)
  first = [1] * n

  for i in range(1, n): 
    first[i] *= nums[i - 1] * first[i - 1]
  
  suffix = 1

  for i in range(n - 1, -1, -1):
    first[i] *= suffix
    suffix *= nums[i]
  return first

print(products_nums_ex(nums))