

# Write a function that accepts an array of numbers and returns the product of all the numbers.

# Input: [1, 2, 3, 4]

from typing import List

nums = [1, 2, 3, 4]


def productOfAll(nums: List[int]) -> int: 
  product = 1
  for num in nums: 
    product *= num

  return product 


print(productOfAll(nums))