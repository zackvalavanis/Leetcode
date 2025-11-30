class ListNode { 
  constructor(val){ 
    this.val = val; 
    this.next = null;
    this.prev = null
  }
}

var arr = [1,2,3,4]

const main = (arr) => { 
  let head = new ListNode(arr[0])
  let current = head; 

  for(let i = 1; i < arr.length; i++){
    let newNode = new ListNode(arr[i])
    current.next = newNode
    newNode.prev = current
    current = newNode
  }
  return head
}


let swapPairs = (head) => { 
  if(!head || !head.next) return head
  let dummy = new ListNode(0)
  dummy.next = head; 
  head.prev = dummy; 

  let current = dummy

  while(current.next && current.next.next){
    let first = current.next
    let second = current.next.next

    first.next = second.next
    if(second.next) second.next.prev = first

    second.next = first
    first.prev = second

    current.next = second
    second.prev = current

    current = first
  }
  return dummy.next
}

let head = main(arr)

const helper = (head) => { 
  console.log('swapped')
  let curr = head; 
  while(curr){ 
    console.log(curr.val)
    curr = curr.next
  }
}

let swappedHead = swapPairs(head);
helper(swappedHead);






