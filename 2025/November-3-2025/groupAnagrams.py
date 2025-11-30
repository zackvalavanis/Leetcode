from typing import List
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]

def grouped(strs: List[str]) -> List[List[str]]:
  res = defaultdict(list)

  for word in strs: 
    word_sorted = ''.join(sorted(word))
    
    res[word_sorted].append(word)
    group = list(res.values())
  group.sort(key=lambda x: (len(x)))
  return group



print(grouped(strs))