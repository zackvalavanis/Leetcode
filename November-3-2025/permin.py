s = "abc"
t = "lecabee"

def perm_in_string(s: str, t: str) -> bool: 
  if len(s) > len(t): return False

  left = 0
  hashS = [0] * 26
  hashT = [0] * 26
  
  for right in range(0, len(s)):
    hashS[ord(s[right]) - ord('a')] += 1
    hashT[ord(t[right]) - ord('a')] += 1

  matches = 0

  for i in range(26): 
    matches += (1 if hashS[i] == hashT[i] else 0)
  left = 0
  for right in range(len(s), len(t)): 
    if matches == 26: return True

    index = ord(t[right]) - ord('a')
    hashT[index] += 1

    if hashS[index] == hashT[index]: 
      matches += 1
    elif hashS[index] + 1 == hashT[index]:
      matches -= 1

    index = ord(t[left]) - ord('a')
    hashT[index] -= 1
    if hashS[index] == hashT[index]: 
      matches += 1
    elif hashS[index] - 1 == hashT[index]:
      matches -= 1
    left += 1
  return matches == 26 

print(perm_in_string(s, t))

  

    

