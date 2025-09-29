// 203. Remove Linked List Elements
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

class ListNode { 
  constructor(val) { 
    this.val = val; 
    this.next; null;
  }
}

var arr = [1,2,6,3,4,5,6]
var value = 6

const singly = (arr) => { 
  let head = new ListNode(arr[0])
  let curr = head; 

  for(let i = 1; i < arr.length; i++){
    let nextNode = new ListNode(arr[i])
    curr.next = nextNode; 
    curr = nextNode;
  }

  let current = head; 
  while(current){ 
    console.log(current.val)
    current = current.next; 
  }
  return head 
}


const removeLinkedList = (head, value) => { 
  let dummy = new ListNode(0)
  dummy.next = head; 
  head.prev = dummy; 

  let curr = dummy; 

  while(curr.next){
    if(curr.next.val === value){
      curr.next = curr.next.next
    } else { 
      curr = curr.next
    }
  }
  return dummy.next
}


let head = singly(arr)
console.log(removeLinkedList(head, value))