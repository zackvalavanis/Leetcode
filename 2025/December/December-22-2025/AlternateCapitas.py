

# Description
# Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

# Input: “hello, how are your porcupines today?”
# Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”
import re

s =  "hello, how are your porcupines today?"

def alternativeCapitalLetters(s: str) -> str: 
  chars = list(s)

  for i in range(1, len(chars), 2):
    chars[i] = chars[i].upper()
  return ''.join(chars)


print(alternativeCapitalLetters(s))