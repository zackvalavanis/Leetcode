# 239. Sliding Window Maximum
# Hard
# Topics
# premium lock icon
# Companies
# Hint
# You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

# Return the max sliding window.

# Example 1:

# Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
# Output: [3,3,5,5,6,7]
# Explanation: 
# Window position                Max
# ---------------               -----
# [1  3  -1] -3  5  3  6  7       3
#  1 [3  -1  -3] 5  3  6  7       3
#  1  3 [-1  -3  5] 3  6  7       5
#  1  3  -1 [-3  5  3] 6  7       5
#  1  3  -1  -3 [5  3  6] 7       6
#  1  3  -1  -3  5 [3  6  7]      7

from typing import List

nums = [1,3,-1,-3,5,3,6,7]
k = 3

def max_sliding_window(nums: List[int], k: int) -> int: 
  curr_max = 0
  stack = []
  left = 0
  right = k 

  while right <= len(nums): 
    left = right - k 
    curr_max = float('-inf')
    while left < right: 
      curr_max = max(curr_max, nums[left])
      left+=1
    stack.append(curr_max)
    right+= 1
  return stack


print(max_sliding_window(nums, k))



