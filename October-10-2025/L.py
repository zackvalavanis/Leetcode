from typing import List

class ListNode: 
  def __init__(self, val: int): 
    self.val = val
    self.next = None
    self.prev = None

arr = [1,2,3,4,5]

def main(arr: List[int]) -> ListNode: 
  head = ListNode(arr[0])
  current = head

  for i in range(1, len(arr)): 
    newNode = ListNode(arr[i])
    current.next = newNode
    newNode.prev = current
    current = newNode
  curr = head
  while curr:
    print(curr.val)
    curr = curr.next
  return head


head = main(arr)
print(head.val)

