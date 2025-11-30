var stuff = [1,2,3,4,5]
var left = 2
var right = 4

class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null
    this.prev = null; 
  }
}

const main = (stuff) => { 
  let head = new ListNode(stuff[0])
  let current = head

  for(let i = 1; i < stuff.length; i++){
    var newNode = new ListNode(stuff[i])
    current.next = newNode
    current = newNode; 
  }

  let curr = head; 
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }
  return head
}

const reverseList = (head) => { 
  let prev = null;
  let curr = head; 

  while(curr){ 
    let nextNode = curr.next
    curr.next = prev;
    prev = curr
    curr = nextNode
  }

  let current = prev; 
  while(current){
    console.log(current.val)
    current = current.next
  }
}

let head = main(stuff)
console.log(reverseList(head))
