# Top K Frequent Elements
# Solved 
# Given an integer array nums and an integer k, return the k most frequent elements within the array.

# The test cases are generated such that the answer is always unique.

# You may return the output in any order.

# Example 1:

# Input: nums = [1,2,2,3,3,3], k = 2

# Output: [2,3]

from typing import List

nums = [7,7]
k = 1

def topKElements(nums: List[int], k: int) -> List[int]: 
  count = {}
  freq = [[] for i in range(0, len(nums) + 1)]

  for num in nums: 
    count[num] = count.get(num, 0) + 1
  for num in count: 
    freq[count[num]].append(num)
  
  res = []

  for i in range(len(nums), -1, -1): 
    for val in freq[i]: 
      res.append(val)
      if len(res) == k: 
        res.sort()
        return res
  return res

print(topKElements(nums, k))