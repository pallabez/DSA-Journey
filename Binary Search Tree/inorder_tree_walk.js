function inorderTreeWalkByRecursion(root) {
    if (root == null) return;

    inorderTreeWalkByRecursion(root.left);
    console.log(root.element);
    inorderTreeWalkByRecursion(root.right);
}

function inorderTreeWalkByStack(root) {
    if (root == null) return;

    let stack = [root];
    let isBacktracking = false;

    while (stack.length != 0) {
        let current = stack[stack.length - 1];

        if (current == null) {
            isBacktracking = true;
            stack.pop();
            continue;
        }

        if (!isBacktracking) {
            stack.push(current.left);
        } else {
            console.log(current.element);
            stack.pop();

            stack.push(current.right);
            isBacktracking = false;
        }
    }
}

module.exports = {
    inorderTreeWalkByRecursion,
    inorderTreeWalkByStack
}