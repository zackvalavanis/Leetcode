hola = '   hhhh    \n'

print(hola.strip())


scores = [("Rodney Dangerfield", -1), ("Marlon Brando", 1), ("You", 100)]

for person in scores: 
  name = person[0]
  score = person[1]
  print("hello {} your score was {}".format(name, score))

person = input("whats your name?")
print("hello {}".format(person))


people = [('ZACK', 40), ("STEVE", 30), ('Bobby', 400)]

for person in people: 
  name = person[0]
  age = person[1]

  print("the correct age of {} is {}".format(name, age))

v = 2.34567

print("{:.2f}, {:.4f}, {:.1f}".format(v, v, v))