class ListNode { 
  constructor(val) { 
    this.val = val; 
    this.next = null; 
    this.prev = null
  }
}

var arr = [1,3,4,7,1,2,6]

const singlyLinked = (arr) => { 
  let head = new ListNode(arr[0])
  let curr = head

  for(let i = 1; i < arr.length; i++){
    let nextNode = new ListNode(arr[i])

    curr.next = nextNode; 
    curr = nextNode;
  }

  let current = head; 

  while(current){ 
    console.log(current.val)
    current = current.next
  }
  return head; 
}

const deleteMiddleOfNode = (head) => { 
  if(!head || !head.next) return null
  let slow = head; 
  let fast = head; 
  let prev = null

  while(fast && fast.next){
    prev = slow; 
    slow = slow.next;
    fast = fast.next.next
  }
  
  prev.next = slow.next; 

  return head; 
}

const printList = (head) => { 
  curr = head; 
  let result = []
  while(curr){
    result.push(curr.val)
    curr = curr.next;
  }
  console.log(result)
}

let head = singlyLinked(arr)
head = deleteMiddleOfNode(head)
printList(head)
