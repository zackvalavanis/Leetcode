

from typing import List
s = ["h","e","l","l","o"]

def rerverse_string(s: List[str]) -> List[str]: 
  left = 0
  right = len(s) -1

  while left < right: 
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left += 1
    right -= 1
  return ''.join(s)

print(rerverse_string(s))

