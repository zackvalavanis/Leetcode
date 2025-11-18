# 933. Number of Recent Calls
# Solved
# Easy
# Topics
# premium lock icon
# Companies
# You have a RecentCounter class which counts the number of recent requests within a certain time frame.

# Implement the RecentCounter class:

# RecentCounter() Initializes the counter with zero recent requests.
# int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
# It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

 

# Example 1:

# Input
# ["RecentCounter", "ping", "ping", "ping", "ping"]
# [[], [1], [100], [3001], [3002]]
# Output
# [null, 1, 2, 3, 3]
from collections import deque 


class RecentCounter: 

  def __init__(self): 
    self.times = deque()


  def ping(self, t: int) -> int: 
    self.times.append(t)
    while self.times and self.times[0] < t - 3000: 
      self.times.popleft()
    return len(self.times)

run = RecentCounter()

print(run.ping(1))     # 1
print(run.ping(100))   # 2
print(run.ping(3001))  # 3
print(run.ping(3002))  # 3