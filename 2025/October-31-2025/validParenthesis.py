



s = "{]"

def validP(s: str) -> bool:
  parenthesis = {
    '[':']',
    '{':'}',
    '(':')'
  }

  stack = []

  for ch in s: 
    if ch in parenthesis: 
      stack.append(parenthesis[ch])
    elif len(stack) == 0 or stack.pop() != ch:
      return False
  return True

print(validP(s))