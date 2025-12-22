

# Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

# Input: “abcdefghhijkkloooop”
# Output: “h”

chars = "abcdefghhijkkloooop"

def duplicatedChar(chars: str) -> str: 
  seen = set()

  for letter in chars: 
    if letter in seen: 
      return letter
    else: 
      seen.add(letter)
  return []

print(duplicatedChar(chars))