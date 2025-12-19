from typing import List, Optional


input = [1,2,3,4]

class ListNode: 
  def __init__(self, value): 
    self.value = value
    self.prev = None 
    self.next = None 


def doubleyLinked(input: List[int]) -> Optional[ListNode]: 
  head = ListNode(input[0])
  curr = head

  for i in range(1, len(input)): 
    nextNode = ListNode(input[i])
    curr.next = nextNode
    nextNode.prev = curr
    curr = nextNode
  return head


head = doubleyLinked(input)

curr = head
while curr: 
  print(curr.value, end=' -> ')
  curr = curr.next 
print('NONE')


def reverseList(head: Optional[ListNode]) -> Optional[ListNode]: 
  curr = head
  new_head = None 

  while curr: 
    curr.prev, curr.next = curr.next, curr.prev
    new_head = curr 
    curr = curr.prev
  return new_head


headII = reverseList(head)

curr = headII
while curr: 
  print(curr.value, end=' -> ')
  curr = curr.next
print('NONE')


