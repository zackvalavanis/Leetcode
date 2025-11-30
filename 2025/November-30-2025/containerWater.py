from typing import List


height = [2,2,2]


def most_water(height: List[int]) -> int: 
  left, right = 0, len(height) - 1
  max_area = 0

  while left < right: 
    width = right - left 
    area = min(height[left], height[right]) * width

    if height[left] < height[right]: 
      left += 1
    else: 
      right -=1
    max_area = max(max_area, area)
  return max_area

print(most_water(height))