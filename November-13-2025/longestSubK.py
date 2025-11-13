# 2958. Length of Longest Subarray With at Most K Frequency
# Solved
# Medium
# Topics
# premium lock icon
# Companies
# Hint
# You are given an integer array nums and an integer k.

# The frequency of an element x is the number of times it occurs in an array.

# An array is called good if the frequency of each element in this array is less than or equal to k.

# Return the length of the longest good subarray of nums.

# A subarray is a contiguous non-empty sequence of elements within an array.

from typing import List
from collections import defaultdict

nums = [1,2,3,1,2,3,1,2]
k = 2

def longestSubk(nums: List[int], k: int) -> int: 
  freq = defaultdict(int)
  left = 0
  max_len = 0

  for right in range(len(nums)): 
    freq[nums[right]] += 1

    while freq[nums[right]] > k: 
      freq[nums[left]] -= 1
      left+=1
    max_len = max(max_len, right - left + 1)
  return max_len

print(longestSubk(nums, k))