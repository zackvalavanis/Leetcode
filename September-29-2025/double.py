# nums = Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

nums = [4, 2, 5, 99, -4]
from typing import List

def double(nums:List[int]) -> List[int]: 
  return [num * 2 for num in nums]


print(double(nums))