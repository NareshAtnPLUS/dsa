import { GraphNode } from '.';

/**
 *
 * @param {GraphNode} node
 */
const cloneGraph = (node) => {
    const oldToNewHashMap = new Map();
    /**
     *
     * @param {GraphNode} node
     * @returns {GraphNode}
     */
    const dfs = (node) => {
        // memoization
        if (oldToNewHashMap.has(node)) {
            return oldToNewHashMap.set(node);
        }
        const copy = new GraphNode(node);
        oldToNewHashMap.set(node, copy);

        for (let neighbour of node.neighbors) {
            copy.neighbors.push(dfs(neighbour));
        }
        return copy;
    };
    /**
     *
     * @param {GraphNode} node
     */
    const bfs = (node) => {
        const visited = new Set(),
            queue = [node],
            oldToNewHashMap = new Map();

        visited.add(node);
        while (queue.length > 0) {
            for (let idx = 0; idx < queue.length; idx++) {
                const node = queue.shift();
                const copy = new GraphNode(node.val);
                oldToNewHashMap.set(node, copy);
                for (let neighbor of node.neighbors) {
                    // if() {
                    // }
                }
            }
        }
    };
    const result = dfs(node);
    return result;
};
