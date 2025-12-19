from typing import List, Optional

input = [1,2,3,4]

class ListNode: 
  def __init__(self, value): 
    self.value = value
    self.next = None 
    self.prev = None 


def doublyLinkedNode(input: List[int]) -> Optional[ListNode]: 
  if not input: 
    return None
  
  head = ListNode(input[0])
  curr = head

  for i in range(1, len(input)): 
    nextNode = ListNode(input[i])
    curr.next = nextNode 
    nextNode.prev = curr
    curr = nextNode
  return head

head = doublyLinkedNode(input)

curr = head

while(curr): 
  print(curr.value, end=' -> ')
  curr = curr.next 
print("NONE")


