# 2540. Minimum Common Value
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Hint
# Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

# Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

# Example 1:

# Input: nums1 = [1,2,3], nums2 = [2,4]
# Output: 2
# Explanation: The smallest element common to both arrays is 2, so we return 2.
from typing import List

nums1 = [1,2,3,6]
nums2 = [2,3,4,5]

def minimum_common_int(nums1: List[int], nums2: List[int]) -> int: 
  left = 0 
  right = 0 

  while left < len(nums1) and right < len(nums2): 
    if nums1[left] > nums2[right]: 
      right += 1
    elif nums1[left] < nums2[right]: 
      left += 1
    elif nums1[left] == nums2[right]: 
      return nums1[left]
  return -1

print(minimum_common_int(nums1, nums2))



