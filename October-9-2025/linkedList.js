

class ListNode { 
  constructor(val){ 
    this.val = val; 
    this.next = null; 
    this.prev = null; 
  }
}


var arr = [1,2,3,4,5]

const main = (arr) =>  { 
  let head = new ListNode(arr[0])
  let current = head; 

  for(let i = 1; i < arr.length; i++){
    let nextNode = new ListNode(arr[i])
    current.next = nextNode;
    nextNode.prev = current; 
    current = nextNode
  }
  // let curr = head; 
  // while(curr){ 
  //   console.log(curr.val)
  //   curr = curr.next
  // }
  return head; 
}

const middleOfList = (head) => { 
  let slow = head; 
  let fast = head; 

  while(fast && fast.next){ 
    slow = slow.next; 
    fast = fast.next.next
  }
  return slow; 
}

const head = main(arr)
console.log(middleOfList(head).val)