from typing import List

nums = [5,7,3,9,4,9,8,3,1]

def largestUnique(nums: List[int]) -> int: 
  freq = {}

  for n in nums:
    freq[n] = freq.get(n, 0) + 1

  maximum = -1
  
  for key, val in freq.items(): 
    if val == 1: 
      maximum = max(maximum, key) 
  return maximum

print(largestUnique(nums))