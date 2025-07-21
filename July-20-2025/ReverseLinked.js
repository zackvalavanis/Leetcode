var numbers = [1, 2, 3, 4]


class LinkedList { 
  constructor(val) { 
    this.val = val; 
    this.next = null
    this.prev = null
  }
}


const createLinkedList = (numbers) => { 
  let head = new LinkedList(numbers[0])
  let current = head

  for(let i = 1; i < numbers.length; i++) { 
    let newNode = new LinkedList(numbers[i])
    current.next = newNode
    current = newNode
  }

  let curr = head
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }
  return head
}


console.log(createLinkedList(numbers))


const reverseList = (head) => {
  let prev = null; 
  let current = head;

  while(current){
    let nextNode = current.next
    current.next = prev;
    prev = current;
    current = nextNode
  }

  let curr = prev; 
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }

}

let head = createLinkedList(numbers)
console.log(reverseList(head))