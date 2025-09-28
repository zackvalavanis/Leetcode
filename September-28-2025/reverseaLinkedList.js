class ListNode {
  constructor(val){ 
    this.val = val; 
    this.next = null; 
    this.prev = null
  }
}


var arr = [1, 2, 3, 4, 5]

// Doubly linked list
const main = (arr) => { 
  let head = new ListNode(arr[0])
  let current = head

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode
    newNode.prev = current; 
    current = newNode
  }
  let curr = head
  while(curr){
    console.log(curr.val)
    curr = curr.next
  }
  return head
}



const reversedDoubleyLinkedList = (head) => { 
  let curr = head; 
  let prev = null; 
  
  while(curr){
    let nextNode = curr.next
    curr.next = prev
    current.prev = nextNode;
    prev = curr;
    curr = nextNode
  }
  let current = prev; 

  while(current){ 
    console.log(current.val)
    current = current.next
  }
}


const findMiddleNode = (head) => { 
  let slow = head; 
  let fast = head; 

  while(fast && fast.next){
    slow = slow.next; 
    fast = fast.next.next
  }
  return slow
}

let head = main(arr)
console.log(findMiddleNode(head).val)


const singlyLinked = (arr) => { 
  let head = new ListNode(arr[0])
  let current = head

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode; 
    current = newNode
  }

  let curr = head
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }
}



