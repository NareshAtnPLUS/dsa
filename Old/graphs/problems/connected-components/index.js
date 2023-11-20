const { graph } = require('./graph');

const connectedComponentsCount = (graph) => {
    // lookup with constant time
    const visited = new Set();
    let count = 0;
    for (const node in graph) {
        console.log(visited);
        const isVisted = explore_dfs(graph, node, visited);
        console.log(isVisted);
        if (isVisted === true) {
            count += 1;
        }
    }
    return count;
};
/**
 *
 * @param {object} graph
 * @param {number} source
 * @param {Set} visited
 */
const explore_dfs = (graph, source, visited) => {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(graph[current]);
        if (visited.has(String(current))) {
            return false;
        } else {
            visited.add(String(current));
            for (const neighbor of graph[current]) {
                queue.push(neighbor);
            }
        }
    }
    return true;
};
/**
 *
 * @param {Object} graph
 * @param {number} current
 * @param {Set} visited
 */
const explore = (graph, current, visited) => {
    if (visited.has(String(current))) {
        return false;
    }
    visited.add(String(current));
    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }
    return true;
};
console.log(connectedComponentsCount(graph));
