from collections import deque
from typing import List

nums = [1,3,-1,-3,5,3,6,7]
k = 3

def sliding_window_max(nums: List[int], k: int) -> List[int]: 
  dq = deque()
  res = []

  for i, num in enumerate(nums): 

    while dq and nums[dq[-1]] < num: 
      dq.pop()
    
    dq.append(i)

    if dq[0] <= i - k: 
      dq.popleft()

    if i >= k - 1: 
      res.append(nums[dq[0]])
  return res
  

print(sliding_window_max(nums, k))