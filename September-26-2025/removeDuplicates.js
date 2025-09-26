// Remove Duplicates from Sorted List

// Solution
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:




class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}

let arr = [1,1,2]



const doublyLinked = (arr) => { 
  let node = new ListNode(arr[0])
  let head = node

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])

    node.next = newNode
    newNode.prev = node; 
    node = newNode; 

  }

  // let curr = head 
  // while(curr){ 
  //   console.log(curr.val)
  //   curr = curr.next
  // }

  return head
}

const removeDuplicates = (head) => { 
  let current = head; 

  while(current && current.next){
    if(current.val === current.next.val){ 
      current.next = current.next.next
      if(current.next) current.next.prev = current
    } else { 
      current = current.next
    }
  }
  return head
}

let head = doublyLinked(arr)

let newHead = removeDuplicates(head);
let current = newHead;
while (current) {
  console.log(current.val);
  current = current.next;
}

