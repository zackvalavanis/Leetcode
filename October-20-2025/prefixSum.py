from typing import List

nums = [1,2,3,4]

def prefixSum(nums: List[int]) -> List[int]: 
  prefixSum = [nums[0]]

  for i in range(1, len(nums)): 
    prefixSum.append(nums[i] + prefixSum[len(prefixSum) -1])
  return prefixSum

print(prefixSum(nums))