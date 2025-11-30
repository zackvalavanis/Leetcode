class ListNode { 
  constructor(val){ 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}

var arr = [1,2,3,4]

const doublyLinked = (arr) => { 
  let head = new ListNode(arr[0])
  let curr = head; 

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    curr.next = newNode; 
    newNode.prev = curr
    curr = newNode
  }

  let current = head; 

  while(current){
    console.log(current.val)
    current = current.next
  }
  return head
}

const swapNodePairs = (head) => { 
  if(!head || !head.next) return head
  let dummy = new ListNode(0)
  dummy.next = head; 
  head.prev = dummy; 

  let current = dummy; 

  while(current.next && current.next.next){
    let first = current.next;
    let second = current.next.next;

    first.next = second.next
    if(second.next) second.next.prev = first
    
    second.next = first; 
    first.prev = second;

    current.next = second; 
    second.prev = current

    current = first
  }

  let newHead = dummy.next;
  newHead.prev = null
  return newHead
}

let head = (doublyLinked(arr))
head = swapNodePairs(head)

let curr = head;
console.log("Forward after swap:");
while (curr) {
  console.log(curr.val);
  if (!curr.next) var tail = curr; // capture tail for backward check
  curr = curr.next;
}

// Traverse backward (to check prev pointers)
console.log("Backward after swap:");
curr = tail;
while (curr) {
  console.log(curr.val);
  curr = curr.prev;
}