var stuff = [1,2,3,4,5]
var left = 2
var right = 4

class ListNode { 
  constructor(val) { 
    this.val = val; 
    this.next = null;
    this.prev = null;
  }
}

const main = (stuff) => { 
  let head = new ListNode(stuff[0])
  let curr = head

  for(let i = 1; i < stuff.length; i++){
    let newNode = new ListNode(stuff[i])
    curr.next = newNode
    curr = newNode
  }

  let current = head;
  while(current){ 
    console.log(current.val)
    current = current.next
  }
  return head
}

const reverse = (head) => { 
  let prev = null; 
  let curr = head

  while(curr){
    let nextNode = curr.next
    curr.next = prev
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
console.log(reverse(head))