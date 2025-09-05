// Merge Two Sorted Linked Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// Example 1:

var arr1 = [1, 2, 4];
var arr2 = [1, 3, 5];

class ListNode {
  constructor(val) { 
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

function buildList(arr) { 
  if(arr.length === 0 ) return null;
  let head = new ListNode(arr[0])
  let curr = head;

  for(let i = 1; i < arr.length; i++){
    curr.next = new ListNode(arr[i])
    curr.next.prev = curr;
    curr = curr.next
  }
  return head
}


function printList(head){
  let curr = head; 
  let result = []
  while(curr) { 
    result.push(curr.val)
    curr = curr.next
  }
  console.log(result.join(' -> '))
}


function mergeLists(list1, list2) { 
  let dummy = new ListNode(0)
  let current = dummy 

  while(list1 && list2) { 
    if (list1.val < list2.val) {
      current.next = list1;
      list1.prev = current;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2.prev = current;
      list2 = list2.next;
    }
    current = current.next;
  }

  if(list1){
    current.next = list1; 
    list1.prev = current; 
  }
  if(list2) { 
    current.next = list2; 
    list2.prev = current
  }
  return dummy.next
}

let list1 = buildList(arr1);
let list2 = buildList(arr2);

console.log('List1')
printList(list1)

console.log('List2')
printList(list2)

let merged = mergeLists(list1, list2)

console.log(merged)
printList(merged)