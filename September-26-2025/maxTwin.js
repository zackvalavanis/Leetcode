// 2130. Maximum Twin Sum of a Linked List
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Example 1:

// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.


class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null; 
    this.prev = null;
  }
}

let arr = [5,4,2,1]

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

const maxTwinSum = (head) => { 
  let slow = head;
  let fast = head;
  while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
  }
  
  let second = slow;
  let prev = null;
  while(second){
      let nextTemp = second.next;
      second.next = prev;
      prev = second;
      second = nextTemp;
  }
  
  // first half head = head
  // second half reversed head = prev
  let first = head;
  let secondHead = prev;
  let maxSum = 0;
  while(secondHead){
      maxSum = Math.max(maxSum, first.val + secondHead.val);
      first = first.next;
      secondHead = secondHead.next;
  }  
  return maxSum
}

let head = buildList(arr);
console.log(maxTwinSum(head)); // 6





