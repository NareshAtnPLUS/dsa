/**
 *
 * @param {string} node
 * @param {string} target
 * @param {Object} adjList
 */
const adjacencyList = (node, target, adjList) => {
    const bfs = () => {
        const visited = new Set(),
            queue = [];
        let length = 0;
        queue.push(node);
        visited.add(node);
        while (queue.length > 0) {
            for (let idx = 0; idx < queue.length; idx++) {
                const curr = queue.shift();
                if (curr === target) {
                    return length;
                }
                // adding all the neighbours to the queue
                for (let neighbour of adjList[curr]) {
                    if (!visited.has(neighbour)) {
                        queue.push(neighbour);
                        visited.add(neighbour);
                    }
                }
            }
            length += 1;
        }
        return length;
    };
    const result = bfs();
    return result;
};
console.log(adjacencyList('A', 'E', adjList));
