// Input: head = [5,4,2,1]
// Output: 6



class ListNode { 
  constructor(val){ 
    this.val = val
    this.next = null
    this.prev = null
  }
}

arr = [5,4,3,2,1]

const main = (arr) => { 
  head = new ListNode(arr[0])

  let current = head
  
  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode
    newNode.prev = current  
    current = newNode
  }

  let curr = head
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }
  return head
}


const twinSum = (head) => {
  let slow = head; 
  let fast = head; 

  while(fast && fast.next){ 
    slow = slow.next 
    fast = fast.next.next
  }
  let prev = null; 
  let curr = slow

  while(curr){
    let newNode = curr.next
    curr.next = prev 
    prev = curr
    curr = newNode
  }

  let first = head;
  let second = prev;

  let maxSum = 0;

  while(second){
    maxSum = Math.max(maxSum, first.val + second.val)
    first = first.next 
    second = second.next
  }
  return maxSum
}

console.log(main(arr).val)