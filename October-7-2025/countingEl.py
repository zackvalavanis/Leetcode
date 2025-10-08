from typing import List

arr = [1,2,3]

def countElements(arr: List[int]) -> int:
  setting = set(arr)
  count = 0

  for i in range(0, len(arr)):
    if arr[i] + 1 in setting: 
      count += 1
  return count 


print(countElements(arr))