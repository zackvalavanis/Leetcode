class ListNode { 
  constructor(val){ 
    this.val = val;
    this.next = null
  }
}


function main() {
  let one = new ListNode(1)
  let two = new ListNode(2)
  let three = new ListNode(3)

  one.next = two
  two.next = three
  let head = one

  let newNode = new ListNode(40)
  let addNode = (prevNode, nodeToAdd) => { 
    nodeToAdd.next = prevNode.next
    prevNode.next = nodeToAdd
  }

  let deleteNode = prevNode => { 
    prevNode.next = prevNode.next.next
  }

  addNode(two, newNode)
  

  let current = head
  while(current){
    console.log(current.val)
    current = current.next
  }
}


main()