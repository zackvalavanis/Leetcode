from typing import List
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]


def groupAnagrams(strs: List[str]) -> List[List[str]]:
  res = defaultdict(list)

  for words in strs: 
    sorted_words = ''.join(sorted(words))
    res[sorted_words].append(words)
    grouped = list(res.values())
  grouped.sort(key=lambda a: (len(a)))
  return grouped
    

print(groupAnagrams(strs))