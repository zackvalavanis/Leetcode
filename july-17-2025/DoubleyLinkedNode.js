class ListNode { 
  constructor(val) { 
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

let addToEnd = nodeToAdd => { 
  nodeToAdd.next = tail;
  nodeToAdd.prev = tail.prev;
  tail.prev.next = nodeToAdd;
  tail.prev = nodeToAdd
}

let removeFromEnd = () => { 
  if(head.next == tail){
    return
  }
  let nodeToRemove = tail.prev
  nodeToRemove.prev.next = tail;
  tail.prev = nodeToRemove.prev
}

let addToStart = nodeToAdd => { 
  nodeToAdd.prev = head;
  nodeToAdd.next = head.next;
  head.next.prev = nodeToAdd;
  head.next = nodeToAdd
}

let removeFromStart = () => { 
  if(head.next == tail){ 
    return 
  }
  let nodeToRemove = head.next;
  nodeToRemove.next.prev = head;
  head.next = nodeToRemove.next 
}


let addNode = (node, nodeToAdd) => { 
  let prevNode = node.prev;
  nodeToAdd.next = node;
  nodeToAdd.prev = prevNode
  prevNode.next = nodeToAdd;
  node.prev = nodeToAdd
}

let DeleteNode = node => { 
  let prevNode = node.prev;
  let nextNode = node.next
  prevNode.next = nextNode;
  nextNode.prev = prevNode
}