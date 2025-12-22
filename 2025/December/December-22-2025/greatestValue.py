# Description
# Write a function that returns the greatest value from an array of numbers.

# Input: [5, 17, -4, 20, 12]
# Output: 20


from typing import List
nums = [5, 17, -4, 20, 12]

def greatestValue(nums: List[int]) -> int: 
  return max(nums)
print(greatestValue(nums))


def twoPointerMax(nums: List[int]) -> int: 
  maximum = nums[0]
  for right in range(1, len(nums)): 
    if nums[right] > maximum: 
      maximum = nums[right]
  return maximum

print(twoPointerMax(nums))