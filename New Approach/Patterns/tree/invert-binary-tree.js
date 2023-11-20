const { TreeNode } = require('.');

/**
 * swap the children
 * recursively repeat the process for left and right children
 * @param {TreeNode} root
 */
const invertTree = (root) => {
    if (root === null) {
        return null;
    }
    // swapping the children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recursively repeat the process
    invertTree(root.left);
    invertTree(root.right);

    // finally return the root value for that recursive iteration
    return root;
};
