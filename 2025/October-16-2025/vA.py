from typing import List 

s = "racecar"
t = "carrace"

def validAna(s: str, t: str) -> bool:
  hashT = {}
  hashS = {}

  for i in range(len(s)):
    hashS[s[i]] = hashS.get(s[i], 0) + 1
    hashT[t[i]] = hashT.get(t[i], 0) + 1

  for key in hashT: 
    if hashT[key] != hashS.get(key, 0):
      return False
  return True


print(validAna(s, t)) 

