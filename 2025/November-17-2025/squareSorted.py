from typing import List

nums = [-4,-1,0,3,10]

def sq_sorted(nums: List[int]) -> List[int]: 
  n = len(nums)
  left = 0
  res = [0] * n
  right = n - 1

  for i in range(len(nums) - 1, -1, -1): 
    if abs(nums[left]) < abs(nums[right]): 
      squared = nums[right]
      right -= 1
    else: 
      squared = nums[left]
      left+= 1
    res[i] = squared * squared
  return res


print(sq_sorted(nums))
