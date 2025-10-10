class ListNode { 
  constructor(val){ 
    this.val = val
    this.next = null
    this.prev = null
  }
}


var arr = [1,2,3,4,5]

const main = (arr) => { 
  let head = new ListNode(arr[0])
  let current = head; 

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode
    newNode.prev = current
    current = newNode
  }

  // let curr = head
  // while(curr){
  //   console.log(curr.val)
  //   curr = curr.next
  // }
  return head
}

const findMiddle = (head) => { 
  let slow = head; 
  let fast = head

  while(fast && fast.next){ 
    slow = slow.next; 
    fast = fast.next.next
  }
  return slow
}

const reverseHead = (head) => { 
  let curr = head
  let prev = null; 
  let next = null; 

  while(curr){
    next = curr.next; 
    curr.next = prev; 
    curr.prev = next;
    prev = curr; 
    curr = next; 
  }

  let current = prev; 
  while(current){ 
    console.log(current.val)
    current = current.next
  }
}

let head = main(arr)
console.log(findMiddle(head).val)
console.log(reverseHead(head))