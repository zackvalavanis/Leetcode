// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]

var input = [0,1,2,3]

class ListNode {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null
  }
}

const main = (input) => { 
  let head = new ListNode(input[0])
  let current = head

  for(let i = 1; i < input.length; i++){
    let newNode = new ListNode(input[i])
    current.next = newNode
    newNode.prev = current
    current = newNode
  }
  let curr = head; 
  while(curr){
    console.log(curr.val)
    curr = curr.next
  }
  return head
}

const reverseLinkedList = (head) => { 
  let prev = null; 
  let curr = head;

  while(curr){
    let nextNode = curr.next
    curr.next = prev;
    prev = curr; 
    curr = nextNode
  }

  let current = prev; 
  while(current){ 
    console.log(current.val)
    current = current.next
  }
}

let head = (main(input))
console.log(reverseLinkedList(head))