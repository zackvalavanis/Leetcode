from typing import List

nums = [0,0,0]


def three_sum(nums: List[int]) -> List[List[int]]: 
  nums.sort()
  res = []

  for i in range(len(nums)): 
    if i and nums[i] == nums[i - 1]: 
      continue

    left = i + 1
    right = len(nums) -1 

    while left < right:
      sum = nums[i] + nums[left] + nums[right]

      if sum > 0: 
        right -= 1
      elif sum < 0: 
        left += 1
      else: 
        res.append([nums[i], nums[left], nums[right]])
        left += 1
        right -=1 
        while left < right and nums[left] == nums[left - 1]: 
          left += 1
        while left < right and nums[right] == nums[right + 1]: 
          right += 1
  return res


print(three_sum(nums))