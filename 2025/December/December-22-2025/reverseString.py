


s = "ABCDE"


def reverseString(s: str) -> str: 
  split_up = list(s)
  left = 0
  right = len(split_up) - 1

  while left < right: 
    split_up[left], split_up[right] = split_up[right], split_up[left]
    left+=1
    right-=1
  return ''.join(split_up)

print(reverseString(s))