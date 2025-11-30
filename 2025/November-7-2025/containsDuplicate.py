from typing import List

nums = [1, 2, 3, 4]

def containsDuplicate(nums: List[int]) -> bool: 
  numbers = set()

  for num in nums: 
    if num in numbers: 
      return True
    else: 
      numbers.add(num)
  return False

print(containsDuplicate(nums))