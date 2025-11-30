from typing import List, Optional

class ListNode: 
  def __init__(self, val=0, next=None, prev=None):
    self.val = val
    self.next = next
    self.prev = prev

def linkedList(arr: List[int]) -> Optional[ListNode]: 
  head = ListNode(arr[0])
  curr = head

  for i in range(1, len(arr)): 
    newNode = ListNode(arr[i])
    curr.next = newNode
    newNode.prev = curr
    curr = newNode
  return head


def reverseLinked(head: Optional[ListNode]) -> Optional[ListNode]: 
  curr = head
  newHead = None

  while curr: 
    curr.prev, curr.next = curr.next, curr.prev

    newHead = curr 
    curr = curr.prev
  return newHead



def print_list(head): 
  curr = head
  while curr: 
    print(curr.val, end="->" if curr.next else "\n")
    curr = curr.next


arr = [1,2,3,4,5]
head = linkedList(arr)

print("Forward:")
print_list(head)

head = reverseLinked(head)

print("reversed")
print_list(head)





# def list(head: Optional[ListNode]) -> Optional[ListNode]:
  
                                               