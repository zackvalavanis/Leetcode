s = "racecar"
t = "carrace"

# Output: true


def validAnagram(s: str, t: str) -> bool: 
  if len(s) != len(t): return False
  sHash = {}
  tHash = {}

  for i in range(0, len(s)): 
    sHash[s[i]] = sHash.get(s[i], 0) + 1
    tHash[t[i]] = tHash.get(t[i], 0) + 1

  for key,val in sHash.items(): 
    if val != tHash[key]:
      return False
  return True

print(validAnagram(s, t))
