from typing import List

nums = [-1,0,1,2,-1,-4]


def threeSome(nums: List[int]) -> List[List[int]]: 
  nums.sort()
  res = []

  for i in range(0, len(nums)): 
    if(nums[i] > 0): break
    
    if(i and nums[i] == nums[i - 1]): continue

    left = i + 1
    right = len(nums) -1

    while(left < right): 
      sum = nums[i] + nums[left] + nums[right]

      if sum < 0: 
        left+= 1
      elif sum > 0: 
        right-=1
      else: 
        res.append([nums[i], nums[left], nums[right]])
        right-=1
        left+= 1
        while left < right and nums[left] == nums[left - 1]:
          left+=1
        while left < right and nums[right] == nums[right + 1]:
          right-=1
  return res

print(threeSome(nums))

