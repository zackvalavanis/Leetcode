class Listnode { 
  constructor(val) { 
    this.val = val; 
    this.next = null; 
    this.prev = null
  }
}

var arr = [0,1,2,3]

const main = (arr) => { 
  let head = new Listnode(arr[0])
  let current = head; 

  for(let i = 1; i < arr.length; i++){
    let newNode = new Listnode(arr[i])
    current.next = newNode; 
    newNode.prev = current; 
    prev = current; 
    current = newNode
  }
  return head 
}

const reverseList = (head) => { 
  let prev = null; 
  let current = head; 

  while(current){ 
    let nextNode = current.next; 
    current.next = prev; 
    current.prev = nextNode

    prev = current;
    current = nextNode; 
  }
  return prev
}

const head = main(arr)

console.log('forward')
let current = head; 
while(current){ 
  console.log(current.val)
  current = current.next
}

const reversed = reverseList(head);

console.log('backward (after reverse):');
current = reversed;
while (current) { 
  console.log(current.val);
  current = current.next;
}









