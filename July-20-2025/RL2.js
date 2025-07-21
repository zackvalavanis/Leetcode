// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

var stuff = [1,2,3,4,5]
var left = 2
var right = 4

class ListNode { 
  constructor(val) { 
    this.val = val; 
    this.next = null; 
    this.prev = null
  }
}

const main = (stuff) => { 
  let head = new ListNode(stuff[0])
  let curr = head;

  for(let i = 1; i < stuff.length; i++){
    var newNode = new ListNode(stuff[i])
    curr.next = newNode
    curr = newNode
  }

  var current = head
  while(current){ 
    console.log(current.val)
    current = current.next
  }
  return head
}

let head = main(stuff)


const reverseBetween = (head, left, right) => { 
  if(!head || left === right) return head

  let dummy = new ListNode(0)
  dummy.next = head;
  let prev = dummy; 

  for(let i = 1; i < left; i++){
    prev = prev.next
  }

  let curr = prev.next;
  let next = null;

  for(let i = 0; i < right - left; i++){
    next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next; 
  }
  return dummy.next
}


const printList = (head) => {
  let curr = head;
  let out = [];
  while (curr) {
    out.push(curr.val);
    curr = curr.next;
  }
  console.log(out);
};

const newHead = reverseBetween(head, left, right);
printList(newHead);