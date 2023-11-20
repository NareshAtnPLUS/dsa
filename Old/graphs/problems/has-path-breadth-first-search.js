const { graph } = require('./graph');

const breadthFirstSearchHasPath = (graph, source, destination) => {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === destination) {
            return true;
        }
        for (const neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
};
console.log(breadthFirstSearchHasPath(graph, 'j', 'f'));
console.log(breadthFirstSearchHasPath(graph, 'f', 'k'));
