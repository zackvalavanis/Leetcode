# Solution
# Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

# Example 1:

# Input: nums = [-4,-1,0,3,10]
# Output: [0,1,9,16,100]

from typing import List

nums = [-4,-1,0,3,10]

def squares_of_sorted_array(nums: List[int]) -> List[int]:

  for i in range(len(nums)):
    nums[i] = nums[i]**2
  nums.sort()

  return nums

print(squares_of_sorted_array(nums)) 


def refactored_sq_sorted(nums: List[int]) -> List[int]: 
  n = len(nums)
  result = [0] * n
  left = 0 
  right = n - 1
  pos = n - 1

  while left <= right: 
    if abs(nums[left]) < abs(nums[right]): 
      result[pos] = nums[left]**2
      left += 1
    else: 
      result[pos] = nums[right]**2
      right -= 1
    pos -=1 
  return nums

print(refactored_sq_sorted(nums))