function tree_successor(node) {
    if (!node) return null;

    if (node.right) return tree_minimum(node.right);
    
    y = node.parent;
    x = node;
    while(!y && x != y.left) {
        x = y
        y = y.parent        
    }

    return y;
}

function tree_minimum(root) {
    if (!root || !root.left) return root;

    return tree_minimum(root.left);
}

module.exports = {
    tree_successor
}