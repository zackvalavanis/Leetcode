from collections import defaultdict
from typing import List

strs = ["act","pots","tops","cat","stop","hat"]

def groupAnagrams(strs: List[str]) -> List[List[str]]: 
  res = defaultdict(list)
  for i in range(0, len(strs)): 
    words_sorted = ''.join(sorted(strs[i]))
    res[words_sorted].append(strs[i])
  grouped = list(res.values())
  return grouped

    
print(groupAnagrams(strs))