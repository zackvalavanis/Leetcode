
class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}

let arr = [1,2,3]

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

const swapAj = (head) => { 
  if (!head || !head.next) return head;
  let dummy = new ListNode(0)
  dummy.next = head; 
  head.prev = dummy; 

  let current = dummy; 

  while(current.next && current.next.next) { 
    let first = current.next;
    let second = current.next.next

    first.next = second.next;

    if(second.next) second.next.prev = first

    second.next = first; 
    first.prev = second; 

    current.next = second; 
    second.prev = current;

    current = first; 
  }

  return dummy.next
}

let head = doublyLinked(arr)
let newhead = swapAj(head)  // <<--- actually call the swap function

let current = newhead; 
while(current){
  console.log(current.val)  // Should print: 2, 1, 3
  current = current.next
}