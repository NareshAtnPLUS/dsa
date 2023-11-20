import { TreeNode } from '../tree';

/**
 *
 * @param {TreeNode} root
 * @param {*} val
 * @returns
 */
function insertTreeNode(root, val) {
    /**
     *
     * @param {TreeNode} root
     * @param {*} val
     * @returns
     */
    const insert = (root, val) => {
        if (root === null) {
            return new TreeNode(val);
        }
        if (val > root.val) {
            /**
             * if the value is greater than the current value
             * insert into right of the subtree
             */
            root.right = insert(root.right, val);
        } else if (val < root.val) {
            /**
             * if the value is lesser than the current value
             * insert into left of the sub tree
             */
            root.left = insert(root.left, val);
        }
        /**
         * finally return the root of the subtrees in a recursive operation
         */
        return root;
    };
    const insertedTree = insert(root, val);
    return insertedTree;
}
