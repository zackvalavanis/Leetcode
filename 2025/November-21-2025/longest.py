# Longest Consecutive Sequence
# Solved 
# Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

# A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

# You must write an algorithm that runs in O(n) time.

# Example 1:

# Input: nums = [2,20,4,10,3,4,5]

# Output: 4

from typing import List
nums = [2,20,4,10,3,4,5]


def longest_seq(nums: List[int]) -> int: 
  check = set(nums)
  longest = 0

  for num in check: 
    if num + 1 not in check:
      current = num 
      streak = 1
      while current + 1 in check: 
        current += 1
        streak +=1 
      longest = max(longest, streak)
  return longest

print(longest_seq(nums))
     



