from typing import List

height = [1,7,2,5,4,7,3,6]

def maxContainer(height: List[int]) -> int:
  left = 0 
  right = len(height) - 1
  res = 0
  
  while(left < right):
    width = right - left
    area = min(height[left], height[right]) * width

    res = max(res, area)

    if height[left] <= height[right]:
      left+= 1
    else: 
      right-= 1
  return res


print(maxContainer(height))
    
  