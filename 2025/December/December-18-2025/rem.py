# <!-- Remove Duplicates From Sorted Array
# You are given an integer array nums sorted in non-decreasing order. Your task is to remove duplicates from nums in-place so that each element appears only once.

# After removing the duplicates, return the number of unique elements, denoted as k, such that the first k elements of nums contain the unique elements.

# Note:

# The order of the unique elements should remain the same as in the original array.
# It is not necessary to consider elements beyond the first k positions of the array.
# To be accepted, the first k elements of nums must contain all the unique elements.
# Return k as the final result.

# Example 1:

# Input: nums = [1,1,2,3,4]

# Output: [1,2,3,4] -->

from typing import List

nums = [1,1,2,3,4]

def removeDuplicatesSortedArray(nums: List[int]) -> List[int]: 
  if not nums: 
    return 0
  left = 1

  for right in range(1, len(nums)): 
    if nums[right] != nums[right - 1]: 
      nums[left] = nums[right]
      left += 1
  return left
    

k = removeDuplicatesSortedArray(nums)
print(k)

print(nums[:k])