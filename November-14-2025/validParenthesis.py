s = "("

def validParenthesis(s: str) -> bool: 
  parenthesis = {
    '{':'}',
    '[':']',
    '(':')'
  }

  stack = []

  for ch in s: 
    if ch in parenthesis: 
      stack.append(parenthesis[ch])
    else: 
      if not stack: 
        return False
      last = stack.pop()
      if parenthesis[last] != ch: 
        return False
  return len(stack) == 0


print(validParenthesis(s))