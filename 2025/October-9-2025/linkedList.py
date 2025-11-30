from typing import List

class ListNode: 
  def __init__(self, val: int): 
     self.val = val
     self.next = None
     self.prev = None


arr = [1,2,3,4,5]

def linked(arr: List[int]) -> ListNode: 
   if not arr: 
      return None 
   
   head = ListNode(arr[0])
   curr = head

   for i in range(1, len(arr)):
      nextNode = ListNode(arr[i])
      curr.next = nextNode
      nextNode.prev = curr
      curr = nextNode
   current = head
   while current: 
      print(current.val)
      current = current.next

   return head


print(linked(arr))

