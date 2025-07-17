// 141. Linked List Cycle
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


var input = [3,2,0,-4]
var pos = 1

class ListNode { 
  constructor(val){ 
    this.val = val; 
    this.next = null;
    this.prev = null
  }
}


function main(input, pos) { 
  let head = new ListNode(input[0]);
  let current = head;
  let cycleEntry = null;

  for(let i = 1; i < input.length; i++){
    let newNode = new ListNode(input[i])
    current.next = newNode;
    current = newNode

    if(i === pos){
      cycleEntry = newNode
    }
  }
  if(pos === 0){ 
    cycleEntry = head
  }
  if(pos !== -1){
    current.next = cycleEntry
  }
  return head
}

function hasCycle(head) { 
  let slow = head; 
  let fast = head;

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast) return true;
  }
  return false
}

const head = main(input, pos)
console.log(hasCycle(head))