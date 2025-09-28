class ListNode { 
  constructor(val){ 
    this.val = val; 
    this.next = null; 
  }
}

const singlyLinked = (arr) => { 
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let curr = head; 
  for(let i = 1; i < arr.length; i++){
    curr.next = new ListNode(arr[i]); 
    curr = curr.next;
  }
  return head; 
}

const reversedTwo = (head, left, right) => { 
  if(!head || left === right) return head; 

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;


  for(let i = 1; i < left; i++){
    prev = prev.next;
  }

  let curr = prev.next; 
  let prevSub = null; 
  let nextNode = null;

  for(let i = 0; i < right - left + 1; i++){
    nextNode = curr.next; 
    curr.next = prevSub; 
    prevSub = curr; 
    curr = nextNode; 
  }

  prev.next.next = curr;
  prev.next = prevSub; 

  return dummy.next; 
}

let arr = [1,2,3,4,5];
let head = singlyLinked(arr);
let left = 2;
let right = 4;

head = reversedTwo(head, left, right);

// print result
let curr = head;
let result = [];
while(curr){
  result.push(curr.val);
  curr = curr.next;
}
console.log(result); // [1,4,3,2,5]
