const validTree = (n, edges) => {
    if (n === 0) {
        return true;
    }
    const adjList = new Map(
            Array.from({ length: n }, () => []).map((adjList, node) => [
                node,
                adjList,
            ])
        ),
        visited = new Set();

    for (let [n1, n2] of edges) {
        const n1Neighbours = adjList.get(n1);
        const n2Neighbours = adjList.get(n2);
        adjList.set(n1, [...n1Neighbours, n2]);
        adjList.set(n2, [...n2Neighbours, n1]);
    }
    const dfs = (node, prev) => {
        if (visited.has(node)) {
            // we have encountered a cycle, so the graph cannot be a tree
            return false;
        }
        visited.add(node);
        const neighbors = adjList.get(node);
        for (let neighbor of neighbors) {
            if (neighbor === prev) {
                continue;
            }
            if (!dfs(neighbor, node)) {
                return false;
            }
        }
        return true;
    };
    const isValid = dfs(0, -1) && n === visited.size;
    return isValid;
};
console.log(
    validTree(5, [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
    ])
);
