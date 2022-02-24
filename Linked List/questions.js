const { LinkedList, Node } = require('./LinkedList');

// Inverse a Linked List

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);

const reverseLinkedList = (list) => {
  const reverseList = (head) => {
    if(!head || !head.next) return head;
  
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
  
    return newHead;
  }
  
  list.tail = list.head;
  list.head = reverseList(list.head);
  
  return list;
}


// Find mid point of Linked List

const returnMidNode = (list) => {
  let slow = list.head;
  let fast = list.head.next;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Check if Linked List is Palindrome or not

const checkPalindrome = (list) => {
  let arr = [];

  let curr = list.head;
  while(curr) {
    arr.push(curr.element);
    curr = curr.next;
  }
  for(i in arr) {
    if(arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome(list));