
class MinStack: 
  def __init__(self): 
    self.stack = []
  
  def push(self, val: int) -> None: 
    return self.stack.append(val)

  def pop(self) -> None: 
    return self.stack.pop()
  
  def top(self) -> int: 
    return self.stack[-1]
  
  def min(self) -> int: 
    return min(self.stack)
  
  def max(self) -> int: 
    return max(self.stack)


minStack = MinStack()

minStack.push(1)
minStack.push(3)
minStack.push(5)
minStack.push(-2)


print(minStack.stack)
print(minStack.min())
print(minStack.max())

