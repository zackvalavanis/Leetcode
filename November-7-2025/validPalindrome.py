import re
from typing import List

s = "Was it a car or a cat I saw?"


def validPalindrome(s: str) -> bool: 
  word = re.sub(r'[^A-Za-z0-9]', "", s).lower()
  return word == word[::-1]

print(validPalindrome(s))