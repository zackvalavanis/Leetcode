nums = [1, 2, 3]

del nums[2]
print(nums)


a = 'banana'
b = 'banana'

print(a is b)
print(id(a))
print(id(b))

hi = [1, 2, 3]
bye = [1, 2, 3]

print(hi is bye)
print(id(hi))
print(id(bye))

hello = [1, 2, 3]
byebye = hello 

print(id(hello))
print(id(byebye))
