from typing import List 

p = '()'

def validP(p: List[str]) -> bool: 
  paren = { 
    '[': ']', 
    '{': '}', 
    '(':')'
  }

  stack = []

  for char in p: 
    if char in paren: 
      stack.append(paren[char])
    else: 
      if len(stack) == 0 or stack.pop() != char: 
        return False
  return len(stack) == 0


print(validP(p))