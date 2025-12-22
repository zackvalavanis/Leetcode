s = "popcorn is so cool isn’t it yeah i thought so"

def reverssedWords(s: str) -> str: 
  words = s.split(' ')

  return ' '.join(words[::-1])

print(reverssedWords(s))