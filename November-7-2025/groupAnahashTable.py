from typing import List 
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]

def groupedAnagram(strs: List[str]) -> List[List[str]]: 
  res = defaultdict(list)

  for word in strs: 
    count = [0] * 26
    for ch in word: 
      count[ord(ch) - ord('a')] += 1
    res[tuple(count)].append(word)
  return list(res.values())
      
    

print(groupedAnagram(strs))