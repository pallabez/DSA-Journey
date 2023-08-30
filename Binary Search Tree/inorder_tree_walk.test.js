const { inorderTreeWalkByRecursion } = require('./inorder_tree_walk');
const { BinarySearchTree } = require('./BST');

describe('Inorder Tree Walk', () => {
    let bst;
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log');
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('By Recursion', () => {
        it('should print null', () => {
            const bst = new BinarySearchTree();

            inorderTreeWalkByRecursion(bst.root);
        })

        it('should print out element using console', () => {
            const bst = new BinarySearchTree();
            bst.add(2);
            bst.add(3);
            bst.add(1);

            inorderTreeWalkByRecursion(bst.root);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 3);
        })
    })
});  