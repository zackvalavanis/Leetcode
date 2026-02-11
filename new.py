a = [1,2,3]
b = a[:]

print(a is b)
print(id(a))
print(id(b))


a.insert(2, 900)

print(a)
print(a.count(900))
a.reverse()
print(a)
a.sort()
print(a)
a.remove(900)
print(a)
a.pop(2)
print(a)