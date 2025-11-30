


class MyQueue: 
  def __init__(self):
    self.stack = []

  def push(self, x: int) -> None: 
    return self.stack.append(x)

  def pop(self) -> int: 
    return self.stack.pop()

  def peek(self) -> int: 
    return self.stack[-1]

  def empty(self) -> bool: 
    return len(self.stack) == 0 



q = MyQueue()

q.push(2)
q.push(3)

print(q.peek())


print(q.stack)



