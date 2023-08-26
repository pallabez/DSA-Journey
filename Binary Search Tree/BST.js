class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(element) {
        if (this.root == null) {
            this.root = new Node(element);
            return;
        }

        addElementToBST(element, this.root);
    }
}

function addElementToBST(element, root) {
    if (element > root.element) {
        if (root.right == null) {
            root.right = new Node(element);
            return;
        } 

        addElementToBST(element, root.right);
    } else {
        if (root.left == null) {
            root.left = new Node(element);
            return;
        }

        addElementToBST(element, root.left);
    }
}

module.exports = {
    BinarySearchTree,
    Node
}