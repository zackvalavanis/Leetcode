# Remove Element
# You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.

# After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.

# Note:

# The order of the elements which are not equal to val does not matter.
# It is not necessary to consider elements beyond the first k positions of the array.
# To be accepted, the first k elements of nums must contain only elements not equal to val.
# Return k as the final result.

# Example 1:

# Input: nums = [1,1,2,3,4], val = 1

# Output: [2,3,4]

from typing import List
nums = [1,1,2,3,4]
val = 1


def removeElement(nums: List[int], val: int) -> List[int]: 
  left = 0
  right = len(nums)   #initialize right pointer at the end

  while left < right: #while theyre initilized run loop 
    if nums[left] == val: #if the left pointer == 1 
      right-=1 # right pointer moves left 1 
      nums[left] = nums[right] #then left number = right number
    else: 
      left += 1
  return right


k = removeElement(nums, val)

print(nums[:k])

