

s = "Let's take LeetCode contest"


def reverse_words(s: str) -> str: 
  return ' '.join(word[::-1] for word in s.split(' '))


print(reverse_words(s))