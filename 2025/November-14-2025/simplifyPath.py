

path = "/home/"

def simplify(path: str) -> str: 
  stack = []

  for part in path.split('/'): 
    if part == '' or part =='.': 
      continue
    elif part == '..': 
      stack.pop()
    else: 
      stack.append(part)
  return '/' + ''.join(stack)

  
print(simplify(path))