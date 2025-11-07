
# Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

# Example 1:
from typing import List
from collections import defaultdict
nums = [5,7,3,9,4,9,8,3,1]
# Output: 8


def largestUnique(nums: List[int]): 
  freq = defaultdict(int)

  for num in nums: 
    freq[num] += 1

  max_num = -1
  
  for number, times in freq.items():
    if times == 1: 
      max_num = number if times == 1 and number > max_num else max_num
  return max_num 

print(largestUnique(nums))