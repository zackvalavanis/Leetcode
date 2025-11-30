s = "racecar"
t = "carraze"


def validAnagram(s: str, t: str) -> bool:
  if len(s) != len(t): return False
    
  count = {}

  for ch in s: 
    count[ch] = count.get(ch, 0) + 1
  for ch in t: 
    if count.get(ch, 0) == 0: 
      return False
    else:  
      count[ch] -= 1
  return True

print(validAnagram(s, t))