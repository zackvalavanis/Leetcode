class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}


arr = [1,2,3,4,5]

// Singly linked list

const singlyLinked = (arr) => { 
  let node1 = new ListNode(arr[0])
  let head = node1

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])

    node1.next = newNode
    node1 = newNode
  }

  let current = head;
  
  while(current){ 
    console.log(current.val)
    current = current.next
  }
}


//Doubly Linked List

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


const middleOfList = (head) => { 
  let slow = head;
  let fast = head

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
}

let head = doublyLinked(arr)
console.log(middleOfList(head).val)


