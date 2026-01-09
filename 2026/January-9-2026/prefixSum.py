# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

# Return the running sum of nums.

 

# Example 1:

# Input: nums = [1,2,3,4]
# Output: [1,3,6,10]
# Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


from typing import List
nums = [1,2,3,4]

def prefix_sum(nums: List[int]) -> List[int]: 
  prefix = [nums[0]]

  for i in range(1, len(nums)): 
    prefix.append(nums[i] + prefix[len(prefix) - 1])
  return prefix

print(prefix_sum(nums))
