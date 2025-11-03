# You are given a non-empty array of integers nums. Every integer appears twice except for one.

# Return the integer that appears only once.

# You must implement a solution with 
# O
# (
# n
# )
# O(n) runtime complexity and use only 
# O
# (
# 1
# )
# O(1) extra space.
from typing import List
from collections import defaultdict

nums = [3,2,3]


def justOnce(nums: List[int]) -> int: 
  hash = defaultdict(int)
  for num in nums: 
    hash[num] += 1
  for num, freq in hash.items():
    if freq == 1: 
      return num
  return -1
  

  


print(justOnce(nums))
