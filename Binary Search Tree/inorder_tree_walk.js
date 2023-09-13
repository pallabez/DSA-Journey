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

function inorderTreeWalkByStackAlternative(root) {
    if (root == null) return;

    let stack = [];
    let curr = root;

    while (curr != null || stack.length != 0) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        console.log(curr.element);

        curr = curr.right;
    }
}

module.exports = {
    inorderTreeWalkByRecursion,
    inorderTreeWalkByStack,
    inorderTreeWalkByStackAlternative
}