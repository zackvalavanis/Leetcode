from collections import defaultdict
from typing import List


s = "XYYX"
k = 2

def charReplace(s: str, k: int) -> int:
  left = 0 
  maxLen = 0
  count = defaultdict(int)
  maxFreq = 0
  
  for right in range(0, len(s)):
    count[s[right]] += 1
    maxFreq = max(maxFreq, count[s[right]])

    while (right - left + 1) - maxFreq > k: 
      count[s[left]]-=1
      left+= 1
    maxLen = max(maxLen, right - left + 1)
  return maxLen
    

print(charReplace(s, k))