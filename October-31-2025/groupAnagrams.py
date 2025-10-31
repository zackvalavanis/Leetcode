from typing import List
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]

def groupAnagrams(strs: List[str]) -> List[List[str]]: 
  res = defaultdict(list)

  for i in range(0, len(strs)):
    word_sorted = ' '.join(sorted(strs[i]))
    res[word_sorted].append(strs[i])
    grouped = list(res.values())
    grouped.sort(key=lambda x: (len(x)))
  return grouped

print(groupAnagrams(strs))