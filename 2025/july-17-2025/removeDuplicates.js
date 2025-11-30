// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var numbers = [1,1,2]

class ListNode { 
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

const buildLinkedList = (numbers) => { 
  let head = new ListNode(numbers[0])
  let current = head

  for(let i = 1; i < numbers.length; i++){
    let newNode = new ListNode(numbers[i])
    current.next = newNode
    current = newNode
  }

  // let curr = head; 
  // while(curr){ 
  //   console.log(curr.val)
  //   curr = curr.next
  // }

  return head
}

let head = (buildLinkedList(numbers))


const removeDuplicates = (head) => { 
  let current = head; 

  while(current && current.next){
    if(current.val === current.next.val){
      current.next = current.next.next
    } else { 
      current = current.next
    }
  }
  let curr = head;
  while(curr){
    console.log(curr.val)
    curr = curr.next
  }
}

console.log(removeDuplicates(head))

