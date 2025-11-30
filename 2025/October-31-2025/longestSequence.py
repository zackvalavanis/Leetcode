from typing import List

nums = [2,20,4,10,3,4,5]

# Output: 4

def longestSequence(nums: List[int]) -> int: 
  num_set = set(nums)
  longest = 0

  for num in num_set:
    if num - 1 not in num_set:
      current = num
      streak = 1

      while current + 1 in num_set:
        current += 1
        streak += 1
      longest = max(longest, streak)
  return longest


print(longestSequence(nums))