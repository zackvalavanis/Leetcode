class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


//Using an Array => This is the easy way its o(n) space and o(n) time

const pairSum = (head) => { 
  let values = []
  let curr = head; 

  while(curr) { 
    values.push(curr.val);
    curr = curr.next;
  }

  let maxSum = 0; 
  let n = values.length; 
  for(let i = 0; i < n; i++){
    maxSum = Math.max(maxSum, values[i] + values[n - 1 - i])
  }
  return maxSum
}

// harder way reverse the second half.. this gives you o(1) space and o(n) time


const pairSumOptimized = (head) => { 
  let slow = head; 
  let fast = head; 

  while(fast && fast.next){
    slow = slow.next; 
    fast = fast.next.next;
  }

  let prev = null;  
  let curr = slow; 

  while(curr){
    let nextNode = curr.next; 
    curr.next = prev; 
    prev = curr; 
    curr = nextNode;
  }

  let first = head; 
  let second = prev; 

  let maxSum = 0; 

  while(second){
    maxSum = Math.max(maxSum, first.val + second.val)
    first = first.next; 
    second = second.next; 
  }

  return maxSum
}














let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(pairSum(head));