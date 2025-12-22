
from typing import List

a = [1, 5, 8]
b = [6, 9]

# Modified A : [1, 5, 6, 8, 9]

def mergeSorted (a: List[int], b: List[int]) -> List[int]: 
  merged = []
  i = 0
  j = 0

  while i < len(a) and j < len(b):
    if a[i] <= b[j]: 
      merged.append(a[i])
      i+=1 
    else: 
      merged.append(b[j])
      j+=1 
    while i < len(a):
        merged.append(a[i])
        i += 1

    while j < len(b):
        merged.append(b[j])
        j += 1
  return merged
 
print(mergeSorted(a, b))