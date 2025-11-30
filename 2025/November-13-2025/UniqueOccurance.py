

from typing import List 

nums = [1,2]

def uniqueOccur(nums: List[int]) -> bool: 
  freq = {}
  
  for num in nums: 
    freq[num] = freq.get(num, 0) + 1
  
  check = set()

  for key, val in freq.items(): 
    if val in check: 
      return False
    check.add(val)
  return True
  
  

print(uniqueOccur(nums))