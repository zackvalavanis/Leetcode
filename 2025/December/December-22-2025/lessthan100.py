


# Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]


from typing import List
nums = [99, 101, 88, 4, 2000, 50]

def allNumbersBelowhundred(nums: List[int]) -> List[int]: 
  return list(filter(lambda x: x < 100, nums))


print(allNumbersBelowhundred(nums))