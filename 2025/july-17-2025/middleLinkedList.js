// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.


var numbers = [1,2,3,4,5]

class ListNode { 
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

const buildLinkedList = (numbers) => { 
  let head = new ListNode(numbers[0])
  let current = head

  for(let i = 1; i < numbers.length; i++){
    let newNode = new ListNode(numbers[i])
    current.next = newNode
    current = newNode
  }
  return head
}


let middleNode = (head) => { 
  let slow = head, fast = head; 

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
}

let head = (buildLinkedList(numbers))
console.log(middleNode(head).val)

