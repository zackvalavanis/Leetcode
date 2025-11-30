from collections import deque


senate = "RD"

def party_win(senate: str) -> str: 
  n = len(senate)
  R = deque()
  D = deque()

  for i, s in enumerate(senate):
    if s == "R": 
      R.append(i)
    else: 
      D.append(i)
  print(R)
  print(D)

  while R and D: 
    r = R.popleft()
    d = D.popleft()

    if r < d: 
      R.append(r + n)
    else: 
      D.append(d + n)
  return "Radient" if R else "Dire"

print(party_win(senate))