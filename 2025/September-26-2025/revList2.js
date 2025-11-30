// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}


let arr = [1,2,3,4,5], left = 2, right = 4

const buildList = (arr) => { 
  let head = new ListNode(arr[0]);
  let node = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    node.next = newNode;
    node = newNode;
  }

  return head;
}

const reversedList = (head) => { 
  let curr = head; 
  let prev = null; 

  while(curr && curr.next){
    if(curr >= left && curr <= right){
      let newNode = curr.next
      curr = newNode; 
      curr.next = prev
      prev = curr; 
      curr = newNode
    }
    curr = curr.next
  }
  return prev
}

let head = buildList(arr)
let curr = head 

while(curr){
  console.log(curr.val)
  current = curr.next
}


