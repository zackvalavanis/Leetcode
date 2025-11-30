// Example 1: Given the head of a linked list with an odd number of nodes head, return the value of the node in the middle.

// For example, given a linked list that represents 1 -> 2 -> 3 -> 4 -> 5, return 3.


class ListNode { 
  constructor(val){ 
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

function main() { 
  head = new ListNode(1)
  second = new ListNode(2)
  third = new ListNode(3)
  fourth = new ListNode(4)
  fifth = new ListNode(5)

  head.next = second;
  second.next = third;
  third.next = fourth; 
  fourth.next = fifth; 

  second.prev = head; 
  third.prev = second;
  fourth.prev = third; 
  fifth.prev = fourth; 


  // console.log('forward')
  // let curr = head
  // while(curr){
  //   console.log(curr)
  //   curr = curr.next
  // }

  // console.log('backward')
  // let tail = fifth
  // while(tail){ 
  //   console.log(tail)
  //   tail = tail.prev
  // }

    let slow = head; 
    let fast = head;
  
    while(fast && fast.next){
      slow = slow.next 
      fast = fast.next.next
    }
    return slow.val

}

console.log(main())
