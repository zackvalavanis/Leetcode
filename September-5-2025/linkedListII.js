var nums = [1, 2, 3, 4, 5]

class ListNode { 
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null
  }
}

const listNode = (nums) => { 
  let head = new ListNode(nums[0])
  let current = head;

  for(let i = 1; i < nums.length; i++){
    let newNode = new ListNode(nums[i])
    current.next = newNode;
    newNode.prev = current;
    current = newNode
  }

  let curr = head;
  while(curr){
    console.log(curr.val)
    curr = curr.next
  }
  return head
}

const reverseList = (head) => {
  let prev = null;
  let curr = head; 

  while(curr){
    let nextNode = curr.next;
    curr.next = prev;
    curr.prev = nextNode

    prev = curr
    curr = nextNode
  }
  return prev
}

let head = listNode(nums)
let reverse = reverseList(head)

console.log('Reversed List:')
let curr = reverse
while(curr){
  console.log(curr.val)
  curr = curr.next
}