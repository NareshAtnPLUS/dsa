/**
 *
 * @param {string} node
 * @param {string} target
 * @param {object} adjList
 * @param {Set} visit
 */
const adjacencyList = (node, target, adjList) => {
    const dfs = (node, target, adjList, visit) => {
        if (visit.has(node)) {
            return 0;
        }
        if (node === target) {
            return 1;
        }
        let count = 0;
        visit.add(node);
        for (let neighbour of adjList[node]) {
            count += dfs(neighbour, target, adjList, visit);
        }
        visit.remove(node);
        return count;
    };
    const result = dfs('A', 'B', adjList, new Set());
    return result;
};
