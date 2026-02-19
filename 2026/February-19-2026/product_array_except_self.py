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

def product_except_self(nums: List[int]) -> List[int]: 
  n = len(nums)
  product = [1] * n
  for i in range(1, n): 
    product[i] = product[i - 1] * nums[i - 1]
  print(product)
  suffix = 1

  for i in range(n -1, -1, -1): 
    product[i] *= suffix
    print(product[i])
    suffix *= nums[i] 
  return product

print(product_except_self(nums))