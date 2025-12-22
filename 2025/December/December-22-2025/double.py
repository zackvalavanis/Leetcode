# Description
# Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

from typing import List
nums = [4, 2, 5, 99, -4]


def doubleArray(nums: List[int]) -> List[int]: 
  return list(map(lambda x: x * 2, nums))

print(doubleArray(nums))