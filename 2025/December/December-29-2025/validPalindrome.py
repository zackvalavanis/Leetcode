

import re
s = "Was it a car w?"

def validPalindrome(s: str) -> bool: 
  cleaned = re.sub(r'[^A-Za-z0-9]', '', s).lower()
  print(cleaned)
  print(cleaned[::-1])
  return cleaned == cleaned[::-1]

print(validPalindrome(s))