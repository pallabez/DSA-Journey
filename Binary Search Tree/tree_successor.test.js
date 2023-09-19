const { BinarySearchTree } = require('./BST')
const { tree_successor } = require('./tree_successor');

describe('Tree Successor', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    })

    describe('e', () => {
        it('should handle null root', () => {
            const node = tree_successor(bst.root);
    
            expect(node).toBe(null);
        });
    
        it('should return null when only 1 element is there', () => {
            bst.add(1);
            const node = tree_successor(bst.root);
            
            expect(node).toBe(null);
        })
    
        it('should return successor', () => {
            bst.add(5)
            bst.add(6)
            bst.add(3)
            bst.add(2)
            bst.add(4)

            
        })
    })
})