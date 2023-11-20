/**
 * Iterative approach of graph traversal
 * @param {Object} graph
 * @param {string} source
 */
const depthFirstTraversal = (graph, source) => {
    const stack = [source];
    // we have run this algorithm till the stack is empty
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (const neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const depthFirstTraversalRecursive = (graph, source) => {
    console.log(source);
    for (const neighbor of graph[source]) {
        depthFirstTraversalRecursive(graph, neighbor);
    }
};
const adjacencyListGraph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

depthFirstTraversal(adjacencyListGraph, 'a');
console.log('---------------------------------------------------');
depthFirstTraversalRecursive(adjacencyListGraph, 'a');
