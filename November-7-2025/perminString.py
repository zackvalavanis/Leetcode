

s1 = "abc"
s2 = "lecabee"


def permIn(s1: str, s2: str) -> bool: 
  if len(s1) > len(s2): return False
  letters = set(s2)

  for i in range(len(s2)):
    if s1[i] not in letters: 
      return False
    else: 
      return True
    





print(permIn(s1, s2))
