



s = "()"

def validParenthesis(s: str) -> bool: 
  parenth = {
    '{':'}', 
    '(':')', 
    '[':']'
  }

  stack = []

  for ch in s: 
    if ch in parenth: 
      stack.append(parenth[ch])
    else: 
      if not stack: 
        return False
      last = stack.pop()
      if last != ch:
        return False
  return len(stack) == 0


print(validParenthesis(s))