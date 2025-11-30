
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

  let curr = head 
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }

  return head
}


const reverseLinked = (head) => { 
  let curr = head; 
  let prev = null; 

  while(curr){
    let nextNode = curr.next
    curr.next = prev;
    prev = curr;
    curr = nextNode
  }
  return prev
}

let head = doublyLinked(arr)

let newHead = reverseLinked(head)
let current = newHead;

while(current){
  console.log(current.val)
  current = current.next
}