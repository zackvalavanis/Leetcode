class ListNode { 
  constructor(val){ 
    this.val = val; 
    this.next = null; 
    this.prev = null;
  }
}

arr = [1, 2, 3, 4, 5]

const main = (arr) => { 
  let head = new ListNode(arr[0])
  let current = head; 

  for(let i = 1; i < arr.length; i++){ 
    let newNode = new ListNode(arr[i])
    current.next = newNode
    newNode.prev = current
    current = newNode
  }
  return head
}


const reversedList = (head) => { 
  let prev = null; 
  let current = head; 
  
  while(current){ 
    let nextNode = current.next
    current.next = current.prev
    current.prev = nextNode; 
    prev = current; 
    current = nextNode;
  }
  return prev
}


const head = main(arr)
let current = head
console.log('Forward')
while(current){ 
  console.log(current.val)
  current = current.next
}

const newHead = main(arr)
let curr = reversedList(newHead)
console.log('reversed')
while(curr){ 
  console.log(curr.val)
  curr = curr.next
}

