from typing import List

nums = [99, 101, 88, 4, 2000, 50]

def lessThan(nums:List[int]) -> int:
  arr = []
  for num in nums:
    if num < 100: 
      arr.append(num)
  return arr


print(lessThan(nums))
