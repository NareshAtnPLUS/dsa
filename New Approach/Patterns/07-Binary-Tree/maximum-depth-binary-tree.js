import { TreeNode } from '../tree';

/**
 *
 * @param {TreeNode} root
 */
const maxDepth = (root) => {
    /**
     *
     * @param {TreeNode} root
     */
    const findDepth_DFS = (root) => {
        if (root === null) {
            // base case if the node is null then return 0, since it will be the base node
            return 0;
        }
        const leftMaxDepth = findDepth_DFS(root.left);
        const rightMaxDepth = findDepth_DFS(root.right);

        const height = Math.max(leftMaxDepth, rightMaxDepth);
        // considering the current node as a height
        const current_height = height + 1;
        return current_height;
    };
    /**
     *
     * @param {TreeNode} root
     */
    const findDepth_BFS = (root) => {
        if (root === null) {
            return 0;
        }
        /**
         *
         * @param {Array} queue
         */
        const bfs = (queue) => {
            let level = 0;
            while (queue.length) {
                for (let i = queue.length - 1; i >= 0; i--) {
                    const root = queue.shift();
                    if (root.left) {
                        queue.push(root.left);
                    }
                    if (root.right) {
                        queue.push(root.right);
                    }
                }
                level += 1;
            }
            return level;
        };
    };
    const max_depth = findDepth_DFS(root);
    return max_depth;
};
