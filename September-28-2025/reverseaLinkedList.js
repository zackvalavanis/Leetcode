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
    prev = curr;
    curr = nextNode
  }
  let current = prev; 

  while(current){ 
    console.log(current.val)
    current = current.next
  }
}

let head = main(arr)
console.log(reversedDoubleyLinkedList(head))

//singly linked list

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



