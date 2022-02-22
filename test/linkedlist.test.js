const { LinkedList, Node }= require('../Linked List/LinkedList')

const addTwoItems = (list) => {
  list.head = new Node('Item 1');
  list.head.next = new Node('Item 2');
  list.tail = list.head.next;
  list.size = 2;
} 

describe('Linked list', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('is created empty', () => {
    expect(list).toEqual({
      head: null,
      tail: null,
      size: 0,
    });

  });

  it('can push to the tail', () => {
    list.add('Item 1');
    expect(list).toEqual({
      head: { element: 'Item 1', next: null },
      tail: { element: 'Item 1', next: null },
      size: 1
    })

    list.add('Item 2');
    expect(list).toEqual({
      head: { element: 'Item 1', next: { element: 'Item 2', next: null } },
      tail: { element: 'Item 2', next: null },
      size: 2
    })
  });

  it('can remove list at given index', () => {
    addTwoItems(list);

    list.remove(1);
    expect(list).toEqual({
      head: { element: 'Item 1', next: null },
      tail: { element: 'Item 1', next: null },
      size: 1
    })

    list.remove(0);
    expect(list).toEqual({
      head: null,
      tail: null,
      size: 0
    })

    addTwoItems(list);

    // If there is are two nodes and index 0 node is removed
    list.remove(0);
    expect(list).toEqual({
      head: { element: 'Item 2', next: null },
      tail: { element: 'Item 2', next: null },
      size: 1
    })
  });

  it.todo('can insert at given location');
});
