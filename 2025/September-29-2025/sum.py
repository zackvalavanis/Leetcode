from typing import List

nums = [1,2,3,4]

def summing(nums: List[int]) -> int: 
  sum = 0; 
  for num in nums: 
    sum += num
  return sum 

print(summing(nums))