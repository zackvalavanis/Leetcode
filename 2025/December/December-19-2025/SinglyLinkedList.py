from typing import List, Optional

input = [1, 2, 3, 4]

class ListNode: 
  def __init__(self, value): 
    self.value = value
    self.next = None

def singlyLinked(input: List[int]) -> Optional[ListNode]: 
  if not input: 
    return None 
  
  head = ListNode(input[0])
  curr = head

  for value in input[1:]:
    curr.next = ListNode(value)
    curr = curr.next 
  return head 


head = singlyLinked(input)
curr = head
while curr: 
  print(curr.value, end=' => ')
  curr = curr.next
print('NONE')

