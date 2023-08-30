function inorderTreeWalkByRecursion(root) {
    if (root == null) return;

    inorderTreeWalkByRecursion(root.left);
    console.log(root.element);
    inorderTreeWalkByRecursion(root.right);
}

module.exports = {
    inorderTreeWalkByRecursion,
}