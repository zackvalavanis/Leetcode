from typing import List

height = [1,7,2,5,4,7,3,6]


def largestContainer(height: List[int]) -> int: 
  left = 0
  right = len(height) -1
  max_area = 0

  while left < right:
    width = right - left
    area = min(height[left], height[right]) * width

    max_area = max(max_area, area)

    if height[left] < height[right]:
      left+=1 
    else: 
      right-=1
  return max_area

print(largestContainer(height))