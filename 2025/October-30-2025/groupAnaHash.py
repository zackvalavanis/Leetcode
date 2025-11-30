from typing import List
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]

def ganaHash(strs: List[str]) -> List[List[str]]: 
  res = defaultdict(list)

  for s in strs: 
    count = [0] * 26
    for ch in s: 
      count[ord(ch) - ord('a')] += 1
    res[tuple(count)].append(s)
  return list(res.values())

print(ganaHash(strs))