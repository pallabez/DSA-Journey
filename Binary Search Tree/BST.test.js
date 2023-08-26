const { BinarySearchTree } = require('./BST')

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('is created empty', () => {
    expect(bst).toEqual({
      root: null,
    });
  });

  describe('add', () => {
    it('can add element to empty BST', () => {
      bst.add(5);
  
      expect(bst).toEqual({
        root: {
          element: 5,
          left: null,
          right: null
        }
      })
    })
  
    it('can add elements smaller than root', () => {
      bst.add(5);
      bst.add(2);
      bst.add(1);
  
      expect(bst).toEqual({
        root: {
          element: 5,
          left: {
            element: 2,
            left: {
              element: 1,
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        }
      })
    })
  
    it('can add elements larger than root', () => {
      bst.add(5);
      bst.add(7);
      bst.add(10);
  
      expect(bst).toEqual({
        root: {
          element: 5,
          right: {
            element: 7,
            right: {
              element: 10,
              left: null,
              right: null,
            },
            left: null,
          },
          left: null,
        }
      })
    })
  
    it('can add element both larger and smaller than root', () => {
      bst.add(5);
      bst.add(2);
      bst.add(7);
  
      expect(bst).toEqual({
        root: {
          element: 5,
          left: {
            element: 2,
            left: null,
            right: null,
          },
          right: {
            element: 7,
            left: null,
            right: null,
          }
        }
      })
    })
  })
});
