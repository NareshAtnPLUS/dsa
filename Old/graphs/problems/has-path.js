const { graph } = require('./graph');
const IterativeHasPath = (graph, src, dst) => {
    const stack = [src];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current === dst) {
            return true;
        }
        for (const neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return false;
};
/**
 * Recursive Depth first finder
 * @param {Object} graph
 * @param {string} src
 * @param {string} dst
 * @returns
 */
const hasPath = (graph, src, dst) => {
    if (src === dst) {
        return true;
    }
    for (const neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dst) === true) {
            return true;
        }
    }
    return false;
};

console.log(IterativeHasPath(graph, 'j', 'f'));
console.log(IterativeHasPath(graph, 'f', 'k'));
