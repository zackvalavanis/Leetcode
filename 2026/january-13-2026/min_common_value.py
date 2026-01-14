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
# Example 2:

from typing import List

nums1 = [2, 3, 4, 5, 5, 10]
nums2 = [1,2,3,10]


#hash 

def min_common_value(nums1: List[int], nums2: List[int]) -> int: 
  hash = set(nums1)
  min_value = float("inf")
  
  for num in nums2: 
    if num in hash: 
      min_value = min(min_value, num)
  return min_value if min_value != float("inf") else -1


print(min_common_value(nums1, nums2))


#defaultdict

#twoPointer

def two_pointer_anser(nums1: List[int], nums2: List[int]) -> int:
  left = 0
  right = 0

  while left < len(nums1) and right < len(nums2):
    if nums1[left] < nums2[right]: 
      left += 1
    elif nums1[left] > nums2[right]: 
      right+= 1
    else:
      return nums1[left]
print(two_pointer_anser(nums1, nums2))