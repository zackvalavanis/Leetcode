// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


class ListNode { 
  constructor(val){ 
    this.val = val;
    this.next = null; 
  }
}
 

var arr = [1,2,3,4,5]
var left = 2 
var right = 4

const main = (arr) => { 
  let head = new ListNode(arr[0]);
  let curr = head;

  for(let i = 1; i < arr.length; i++){ 
    let newNode = new ListNode(arr[i]);
    curr.next = newNode; 
    curr = newNode;
  }

  // Traverse and print linked list
  let current = head;
  while(current){ 
    console.log(current.val);
    current = current.next;
  }

  return head;
}

let head = main(arr);
console.log('Head value:', head.val);


const reverseList = (head, left, right) => { 
  if(!head || !head.next) return head
  let dummy = new ListNode(0)
  dummy.next = head; 
  let prev = dummy; 

  for(let i = 1; i < left; i++){
    prev = prev.next
  }
  
  let curr = prev.next
  let prevSub = null; 
  let newNode = null;
  let subListTail = curr;

  for(let i = 0; i < right - left + 1; i++){
    newNode = curr.next 
    curr.next = prevSub; 
    prevSub = curr
    curr = newNode
  }

  subListTail.next = curr; 
  prev.next = prevSub; 

  return dummy.next
}



