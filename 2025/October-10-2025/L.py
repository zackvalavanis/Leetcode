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

def reverseList(head): 
  prev = None 
  curr = head 

  while curr: 
    nextNode = curr.next
    curr.next = prev
    curr.prev = nextNode
    prev = curr
    curr = nextNode
  return prev


head = main(arr)
print("Original order:")
curr = head
while curr:
    print(curr.val, end=" ")
    curr = curr.next

print("\nReversed order:")
reversed_head = reverseList(head)
curr = reversed_head
while curr:
    print(curr.val, end=" ")
    curr = curr.next

