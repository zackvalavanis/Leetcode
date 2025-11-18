# 346. Moving Average from Data Stream
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

# Implement the MovingAverage class:

# MovingAverage(int size) Initializes the object with the size of the window size.
# double next(int val) Returns the moving average of the last size values of the stream.
 

# Example 1:

# Input
# ["MovingAverage", "next", "next", "next", "next"]
# [[3], [1], [10], [3], [5]]
# Output
# [null, 1.0, 5.5, 4.66667, 6.0]
from collections import deque

class MovingAverage: 
  def __init__(self, size: int): 
    self.size = size
    self.queue = deque()
    self.running_sum = 0

  def next(self, val: int) -> float: 
    self.queue.append(val)
    self.running_sum += val
    if len(self.queue) > self.size: 
      self.running_sum -= self.queue.popleft()
    return self.running_sum / len(self.queue)


arr = [3, 1, 10, 5]

run = MovingAverage(arr[0])  #starts the class with a size of 3
print(run.next(1)) # moves on to 1 so the window is [1] returns average of 1
print(run.next(10)) # window is [1, 10] with print of 5.5
print(run.next(5)) # window is [1,10, 5] with print of 5.3333
