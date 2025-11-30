from typing import List

s = "[]"

def isValid(s: List[str]) -> bool: 
  valid = {
    '[':']', 
    '{':'}', 
    '(':')'
  }

  stack = []

  for char in s: 
    if char in valid: 
      stack.append(valid[char])
    else: 
      if len(stack) == 0 or stack.pop() != char: 
        return False
  return len(stack) == 0

print(isValid(s))