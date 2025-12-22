# Largest Product
# Largest Product
# Description
# Find the largest product of any two numbers within a given array.

# Input: [5, -2, 1, -9, -7, 2, 6]
# Output: 63 (-9 * -7)

from typing import List
nums = [5, -2, 1, -9, -7, 2, 6]

def largestProduct(nums: List[int]) -> int: 
  left = 0
  max_product = float('-inf')

  for i in range(len(nums)): 
    for j in range(i + 1, len(nums)): 
      max_product = max(max_product, nums[i] * nums[j])
  return max_product

print(largestProduct(nums))

