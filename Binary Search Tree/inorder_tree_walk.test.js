const { inorderTreeWalkByRecursion, inorderTreeWalkByStack } = require('./inorder_tree_walk');
const { BinarySearchTree } = require('./BST');

describe('Inorder Tree Walk', () => {
    let bst;
    let consoleLogSpy;

    beforeEach(() => {
        bst = new BinarySearchTree();
        consoleLogSpy = jest.spyOn(console, 'log');
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('By Recursion', () => {
        it('should print null', () => {
            inorderTreeWalkByRecursion(bst.root);
        })

        it('should print out element using console', () => {
            bst.add(2);
            bst.add(3);
            bst.add(1);

            inorderTreeWalkByRecursion(bst.root);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 3);
        })
    })

    describe('By Stack', () => {
        it('should print null', () => {
            inorderTreeWalkByStack(bst.root);
        })

        it('should print out element using console', () => {
            bst.add(2);
            bst.add(3);
            bst.add(1);

            inorderTreeWalkByStack(bst.root);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 3);
        })
    })
});  