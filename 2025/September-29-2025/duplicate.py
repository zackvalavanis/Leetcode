from typing import List

nums = [1, 2, 3, 3]

def hasDuplicate(nums:List[int]) -> bool: 
  return(len(set(nums)) < len(nums))

print(hasDuplicate(nums))