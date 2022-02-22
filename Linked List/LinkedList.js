class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);

    if(this.head == null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }

    this.tail.next = node;
    this.tail = this.tail.next;
    this.size++;
  }

  print() {
    var current = this.head;
    while(current) {
      console.log(current.element);
      current = current.next;
    }
  }

  insert(index, element) {
    if(index < 0 || index > this.size) {
      return console.log('Please enter a valid index');
    } else {
      var node = new Node(element);
      var current;
      if(index == 0) {
        node.next = this.head;
        this.head = node;
        if(!this.size) {
          this.tail = node;
        }
      } else {
        current = this.head;

        while(index - 1) {
          current = current.next;
          index--;
        }

        node.next = current.next;
        current.next = node;
      }

      this.size++;
    }
  }

  remove(index) {
    if(index == 0) {
      if(this.head.next == null) this.tail = null;
      this.head = this.head.next;
      this.size--;
      return;
    }

    var current = this.head;
    while(index - 1) {
      if(!current) {
        console.log('Index not available')
        return;
      }
      current = current.next;
      index--;
    }
    this.size--;
    current.next = current.next.next;
    if(current.next == null) {
      this.tail = current;
    }
  }

  sizeOf() {
    console.log(this.size);
  }
}

module.exports = {
  LinkedList,
  Node,
}