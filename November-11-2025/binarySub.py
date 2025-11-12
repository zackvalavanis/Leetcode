# Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

# A subarray is a contiguous part of the array.

 

# Example 1:

# Input: nums = [1,0,1,0,1], goal = 2
# Output: 4
# Explanation: The 4 subarrays are bolded and underlined below:
# [1,0,1,0,1]
# [1,0,1,0,1]
# [1,0,1,0,1]
# [1,0,1,0,1]

from typing import List

nums = [1,0,1,0,1]
goal = 2

def binary_sum(nums: List[int], goal: int) -> int: 
  prefix_sums = {0: 1}
  count = 0
  res = 0

  for num in nums: 
    count += num
    res+= prefix_sums.get(count - goal, 0)
    prefix_sums[count] = prefix_sums.get(count, 0) + 1
  return res

print(binary_sum(nums, goal))