# Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
# Example 1:

# Input: nums = [-4,-1,0,3,10]
# Output: [0,1,9,16,100]
# Explanation: After squaring, the array bec
from typing import List
import math

nums = [-4,-1,0,3,10]

def square_sorted(nums: List[int]) -> List[int]: 
  for i in range(len(nums)): 
    nums[i] = nums[i]**2
  nums.sort()
  return nums

def square_sorted_optimized(nums: List[int]) -> List[int]: 
  n = len(nums)
  ans = [0] * n
  left = 0
  right = n - 1
  pos = n - 1

  while left <= right: 
    if abs(nums[left]) > abs(nums[right]): 
      ans[pos] = nums[left] * nums[left]
      left += 1
    else: 
      ans[pos] = nums[right] * nums[right]
      right -=1
    pos -=1
  return ans
    
print(square_sorted(nums.copy()))
print(square_sorted_optimized(nums))
