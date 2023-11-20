import { TreeNode } from '../tree';

/**
 *
 * @param {TreeNode} root
 * @param {*} val
 */
function deleteTreeNode(root, val) {
    /**
     * finding minimum in a binary search tree is very simple
     * because of the property of the binary search tree
     * we just have to keep traversing the binary search tree in the left
     * till we reach null. that will be the minimum node of the given
     * binary subtree
     * @param {TreeNode} root
     */
    const findMinNode = (root) => {
        let curr = root;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    };
    /**
     *
     * @param {TreeNode} root
     * @param {*} val
     * @returns
     */
    const deleteNode = (root, val) => {
        if (root === null) {
            return null;
        }
        /**
         * val > root.val; val < root.val are traversing conditions
         */
        if (val > root.val) {
            /**
             * if the value is greater than the current value
             * remove from the right of the subtree
             */
            root.right = deleteNode(root.right, val);
        } else if (val < root.val) {
            /**
             * if the value is lesser than the current value
             * remove from the left of the subtree
             */
            root.left = deleteNode(root.left, val);
        } else {
            /**
             * root.left or right is null then it is a simple
             * remove node case, in these two cases,
             * we will replace the node with their descendant
             */
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                /**
                 * if the left and right is not null and has decendant nodes;
                 * if both the cases fail then the current node has two
                 * decesdant, this is a complex remove case
                 * if this is the case we have to replace the node with
                 * the minimum node in the right subtree
                 *      right sub tree will have greater values than the left
                 *      subtrees, minimum values in the right subtree is because
                 *      the minimum value satisfies the BST condition
                 *      of being greater than all the left descendants
                 *      and lesser than all the right descendants
                 *  **This is the reason we are choosing minimum value in the
                 *  right subtree**
                 *      minimum value in the right subtree will the
                 *      properties of the root of the tree
                 * and remove the minimum node from that right subtree
                 * which will be a duplicate at this point
                 */
                const minNode = findMinNode(root.right);
                root.val = minNode.val;
                root.right = deleteNode(root.right, minNode.val);
            }
        }
        return root;
    };
}
