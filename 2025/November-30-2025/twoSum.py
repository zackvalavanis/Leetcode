from typing import List

numbers = [1,2,3,4]
target = 3


def two_sum(numbers: List[int], target: int) -> bool: 
  left, right = 0, len(numbers) - 1
  sum = 0
  while left < right: 
    sum = numbers[right] + numbers[left]
  
    if sum > target: 
      right -= 1
    elif sum < target: 
      left += 1 
    else: 
      return [left + 1, right + 1]
  return False

print(two_sum(numbers, target))

