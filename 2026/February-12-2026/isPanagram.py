# Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
# Output: true
# Explanation: sentence contains at least one of every letter of the English alphabet.

from typing import List
sentence = "thequickbrownoxjumpsoverthelazydog"


def is_panagram(sentence: str) -> bool: 
  alphabet = set('abcdefghijklmnopqrstuvwxyz')
  
  for char in alphabet: 
    if char not in sentence: 
      return False
  return True


print(is_panagram(sentence))

