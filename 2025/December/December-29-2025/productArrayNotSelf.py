# Products of Array Except Self
# Solved 
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

def product_not_self(nums: List[int]) -> int: 
  array = [1] * len(nums)

  for i in range(1, len(nums)): 
    array[i] = array[i - 1] * nums[i - 1]

  other = 1

  for i in range(len(nums) -1, -1, -1): 
    array[i] *= other
    other *= nums[i]
  print(array)

print(product_not_self(nums))