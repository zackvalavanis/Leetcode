# Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

# Example 1:

# Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
# Output: 6
# Explanation: [1,1,1,0,0,1,1,1,1,1,1]
# Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

from typing import List

nums = [1,1,1,0,0,0,1,1,1,1,0]
k = 2

def max_ones_func(nums: List[int], k: int) -> int: 
  n = len(nums)
  zeroes_count = 0
  left = 0
  max_ones = 0

  for right in range(n): 
    if nums[right] == 0: 
      zeroes_count += 1

    while zeroes_count > k: 
      if nums[left] == 0: 
        zeroes_count -=1
      left+= 1
    max_ones = max(max_ones, right - left + 1)
  return max_ones

print(max_ones_func(nums, k))
    
    