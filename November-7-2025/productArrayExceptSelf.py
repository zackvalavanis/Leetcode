from typing import List

nums = [1,2,4,6]

def productExceptSelf(nums: List[int]) -> List[int]: 
  n = len(nums)
  array = [1] * n
  for i in range(1, len(nums)):
    array[i] = array[i - 1] * nums[i - 1]
  
  suffix = 1

  for i in range(len(nums) - 1, -1, -1):
    array[i] *= suffix
    suffix *= nums[i]
  return array


print(productExceptSelf(nums))