var numbers = [1, 2, 3, 4]

class ListNode { 
  constructor(val) { 
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

function main(numbers) {
  let head = new ListNode(numbers[0])
  let current = head;

  for(let i = 1; i < numbers.length; i++){
    let newNode = new ListNode(numbers[i])
    current.next = newNode;
    newNode = current.prev;
    current = newNode;
  }

  let curr = head; 
  while(curr){
    console.log(curr.val)
    curr = curr.next
  }
  return head
}

function reverseListnode(head){ 
  let prev = null;
  let current = head;

  while(current){ 
    let nextNode = current.next;
    current.next = prev;
    current.prev = nextNode;
    
    prev = current;
    current = nextNode;
  }
  return prev
}

let head = main(numbers)
let reverseHead = reverseListnode(head)

console.log("Reversed list:");
let curr = reverseHead;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}


