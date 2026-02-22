# Longest Consecutive Sequence
# Solved 
# Medium
# Topics
# Company Tags
# Hints
# Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

# A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

# You must write an algorithm that runs in O(n) time.

# Example 1:

# Input: nums = [2,20,4,10,3,4,5]

# Output: 4
from typing import List
nums = [2,20,4,10,3,4,5]

def longest_consecutive_sequence(nums: List[int]) -> int:
  if not nums: 
    return 0
  sorted_set = sorted(set(nums))
  max_len = 1
  curr_len = 1
  for i in range(1, len(sorted_set)):
    if sorted_set[i] == sorted_set[i - 1] + 1: 
      curr_len += 1
    else: 
      curr_len = 1
    max_len = max(max_len, curr_len)
  return max_len

print(longest_consecutive_sequence(nums))


  

