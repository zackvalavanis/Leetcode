import re

s = "Was it a car or a cat I saw?"

def validP(s: str) -> bool: 
  cleaned = re.sub(r'[^A-Za-z0-9]', '', s).lower()
  return cleaned == cleaned[::-1]
  
print(validP(s))