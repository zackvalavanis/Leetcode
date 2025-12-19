# Reverse Linked List
# Solved 
# Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

# Example 1:

# Input: head = [0,1,2,3]

# Output: [3,2,1,0]

from typing import List, Optional

class ListNode: 
  def __init__(self, value): 
    self.value = value
    self.next = None

input = [0,1,2,3]

def singlyLinkedList(input: List[int]) -> Optional[ListNode]: 
  if not input: 
    return None 
  
  head = ListNode(input[0])
  curr = head

  for value in input[1:]: 
    curr.next = ListNode(value)
    curr = curr.next
  return head

head = singlyLinkedList(input)
curr = head

while curr: 
  print(curr.value, end=" -> ")
  curr = curr.next
print("None")



