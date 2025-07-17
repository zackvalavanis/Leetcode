class ListNode { 
  constructor(val) {
    this.val = val;
    this.next = null; 
    this.prev = null; 
  }
}


function main() { 
  head = new ListNode(1)
  second = new ListNode(2)
  third = new ListNode(3)

  head.next = second 
  head.next.next = third

  second.prev = head;
  third.prev = second

  console.log("forward")
    let curr = head;
    while(curr){
      console.log(curr.val)
      curr = curr.next
    }

  console.log("backward")
  let tail = third
  while(tail) {
    console.log(tail.val)
    tail = tail.prev
  }
}

main()