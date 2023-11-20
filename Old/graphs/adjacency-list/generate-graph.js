const { edges } = require('./edges');

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB);
};
const hasPath = (graph, source, destination) => {
    const stack = [source];
    const visited = new Set();
    while (stack.length > 0) {
        const current = stack.pop();
        if (!visited.has(current)) {
            visited.add(current);
            if (current === destination) {
                return true;
            }
            for (const neighbor of graph[current]) {
                stack.push(neighbor);
            }
        }
    }
    return false;
};
const buildGraph = (edgesList) => {
    const graph = {};
    for (const egde of edgesList) {
        const [a, b] = egde;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
console.log(undirectedPath(edges, 'j', 'm'));
