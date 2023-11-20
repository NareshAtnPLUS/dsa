import { TreeNode } from '../tree';

/**
 * invert a binary tree essentially means swap the left and right children
 *
 * @param {TreeNode} root
 */
const invertTree = (root) => {
    /**
     *
     * @param {TreeNode} root
     */
    const invert = (root) => {
        if (root === null) {
            return null;
        }
        // saving the root.right as temp, before we swap
        const temp = root.right;
        // swap the nodes
        root.right = root.left;
        root.left = temp;

        // perform the action recursively to the children nodes of
        // left and right
        invert(root.right);
        invert(root.left);
        return root;
    };
    const invertedTree = invert(root);
    return invertedTree;
};
