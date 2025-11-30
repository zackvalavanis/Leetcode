import collections
queue = collections.deque()

queue = collections.deque([1,2,3])
queue.append(2)
queue.popleft()

print(queue[0])
print(len(queue))

