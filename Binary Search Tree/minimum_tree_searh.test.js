const { BinarySearchTree } = require('./BST')
const { minimumTreeSearch, minimumTreeSearchAlternative } = require('./minimum_tree_search')

describe('Minimum Tree Search', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    })

    describe('By Recursion', () => {
        it('should handle null root', () => {
            const node = minimumTreeSearch(bst.root);
    
            expect(node).toBe(null);
        });
    
        it('should return root when only 1 element is there', () => {
            bst.add(1);
            const node = minimumTreeSearch(bst.root);
            
            expect(node.element).toBe(1);
        })
    
        it('should return node with minimum element', () => {
            bst.add(3);
            bst.add(2);
            bst.add(1);
    
            const node = minimumTreeSearch(bst.root);
    
            expect(node.element).toBe(1);
        })
    })

    describe('By loop', () => {
        it('should handle null root', () => {
            const node = minimumTreeSearchAlternative(bst.root);
    
            expect(node).toBe(null);
        });
    
        it('should return root when only 1 element is there', () => {
            bst.add(1);
            const node = minimumTreeSearchAlternative(bst.root);
            
            expect(node.element).toBe(1);
        })
    
        it('should return node with minimum element', () => {
            bst.add(3);
            bst.add(2);
            bst.add(1);
    
            const node = minimumTreeSearchAlternative(bst.root);
    
            expect(node.element).toBe(1);
        })
    })
})