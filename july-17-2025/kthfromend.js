// Example 3: Given the head of a linked list and an integer k, return the 
// k
// t
// h
// k 
// th
//   node from the end.

// For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4, as it is the 2nd node from the end.

var numbers = [1, 2, 3, 4, 5]
var k = 2;


class ListNode { 
  constructor(val){ 
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


function main(numbers) { 
  let head = new ListNode(numbers[0]);
  let current = head;

  for(let i = 1; i < numbers.length; i++){
    let newNode = new ListNode(numbers[i])
    current.next = newNode;
    current = newNode
  }
  return head
}
 

function kthFromEnd(head, k){
  let slow = head;
  let fast = head; 

  for(let i = 0; i < k; i++){
    if(!fast) return null;
    fast = fast.next
  }

  while(fast) { 
    slow = slow.next;
    fast = fast.next
  }
  return slow.val
}


let head = main(numbers)

// let curr = head;
// while(curr){ 
//   console.log(curr.val)
//   curr = curr.next
// }

let kth = kthFromEnd(head, k)
console.log(kth)
