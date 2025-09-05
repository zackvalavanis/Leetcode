var nums = [5,4,3,2,1]

class ListNode {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

const listNode = (nums) => { 
  let head = new ListNode(nums[0])
  var curr = head;

  for(let i = 1; i < nums.length; i++){
    let newNode = new ListNode(nums[i])
    curr.next = newNode;
    newNode.prev = curr
    curr = newNode; 
  }

  let current = head;
  while(current){
    console.log(current.val)
    current = current.next
  }
  return head
}


const reverseList = (head) => {
  let prev = null;
  let curr = head;

  while(curr){
    let newNode = curr.next;
    curr.next = prev;
    curr.prev = newNode

    prev = curr;
    curr = newNode
  }
  return prev
}


let head = listNode(nums)
let reverse = reverseList(head)

console.log('reversed')

let curr = reverse
while(curr){
  console.log(curr.val)
  curr = curr.next
}