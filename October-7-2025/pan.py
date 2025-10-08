from typing import List 

sentence = "thequckbrownfoxjumpsoverthelazydog"

def isPanagram(sentence: str) -> bool: 
  sets = set(sentence.lower())
  alpha = 'abcdefghijklmnopqrstuvwxyz'

  for a in alpha: 
    if a not in sets: 
      return False
  return True

print(isPanagram(sentence))