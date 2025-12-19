# Concatenation of Array
# You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

# Specifically, ans is the concatenation of two nums arrays.

# Return the array ans.

# Example 1:

# Input: nums = [1,4,1,2]

# Output: [1,4,1,2,1,4,1,2]

from typing import List

nums = [22,21,20,1]

def concatArray(nums: List[int]) -> List[int]:
  for i in range(len(nums)):
    nums.append(nums[i])
  return nums

print(concatArray(nums))

