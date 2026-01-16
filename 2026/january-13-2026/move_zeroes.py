
# Code
# Testcase
# Testcase
# Test Result
# Leet
# 283. Move Zeroes
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# Example 1:

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]

from typing import List

nums = [0,1,0,3,12]

def move_zeroes(nums: List[int]) -> List[int]: 

  for num in nums: 
    if num == 0: 
      nums.split('')
    return nums 

print(move_zeroes(nums))
