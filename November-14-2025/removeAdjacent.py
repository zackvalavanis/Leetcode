s = "abbaca"

def removeAdjacent(s: str) -> str: 
  left = 0
  stack = []

  for right in range(len(s)):
    if stack and stack[-1] == s[right]: 
      stack.pop()
    else: 
      stack.append(s[right])
  return ''.join(stack)


print(removeAdjacent(s))