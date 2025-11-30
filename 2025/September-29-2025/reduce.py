# Write a function that accepts an array of numbers and returns the product of all the numbers.

# Input: [1, 2, 3, 4]
# Output: 24

# Explanation: (1 x 2 x 3 x 4) = 24

from typing import List
nums = [1, 2, 3, 4]

def product_nums(nums:List[int]) -> int: 
  result = 1; 
  for num in nums:
    result *= num
  return result

print(product_nums(nums))