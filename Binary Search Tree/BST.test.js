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
    it('should add element to empty BST', () => {
      bst.add(5);
  
      expect(bst.root.element).toBe(5);
      expect(bst.root.left).toBe(null);
      expect(bst.root.right).toBe(null);
      expect(bst.root.parent).toBe(null);
    })
  
    it('should add elements smaller than root', () => {
      bst.add(5);
      bst.add(2);
      bst.add(1);
  
      expect(bst.root.element).toBe(5);
      expect(bst.root.right).toBe(null);
      expect(bst.root.left.element).toBe(2);
      expect(bst.root.left.left.element).toBe(1);
    })
    
    it('should add elements larger than root', () => {
      bst.add(5);
      bst.add(7);
      bst.add(10);
      
      expect(bst.root.element).toBe(5);
      expect(bst.root.left).toBe(null);
      expect(bst.root.right.element).toBe(7);
      expect(bst.root.right.right.element).toBe(10);
    })
    
    it('should add element both larger and smaller than root', () => {
      bst.add(5);
      bst.add(2);
      bst.add(7);
      
      expect(bst.root.element).toBe(5);
      expect(bst.root.left.element).toBe(2);
      expect(bst.root.right.element).toBe(7);
    })
    
    it('should add child node with parent reference', () => {
      bst.add(5);
      bst.add(2);
      
      expect(bst.root.left.parent.element).toBe(5)
    })
  })
});
