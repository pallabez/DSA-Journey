function minimumTreeSearch(root) {
    if (!root || !root.left) return root;

    return minimumTreeSearch(root.left);
}

function minimumTreeSearchAlternative(root) {
    let curr = root;
    while(curr != null && curr.left != null) {
        curr = curr.left;
    }

    return curr;
}

module.exports = {
    minimumTreeSearch,
    minimumTreeSearchAlternative,
}