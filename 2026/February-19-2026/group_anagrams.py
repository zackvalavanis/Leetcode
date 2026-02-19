from typing import List
from collections import defaultdict

strs = ["act","pots","tops","cat","stop","hat"]

def group_anagrams(strs: List[str]) -> List[str]: 
  groups = {}

  for word in strs: 
    sorted_words = ''.join(sorted(word))

    if sorted_words not in groups: 
      groups[sorted_words] = []
    groups[sorted_words].append(word)
  sorted_groups = sorted(list(groups.values()), key=lambda x: len(x))
  return sorted_groups

print(group_anagrams(strs))