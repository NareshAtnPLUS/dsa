export const bfsAdjacencyList = (
  adjList: Map<string, string[]>,
  source: string,
  destination: string
) => {
  let length = 0;
  const visited = new Set<string>();
  const queue = [];
  visited.add(source);
  queue.push(source);
  while (queue.length > 0) {
    console.log('queue', queue);
    const queueLength = queue.length;
    for (let idx = 0; idx < queueLength; idx++) {
      const currNode = queue.shift();
      if (currNode === undefined) {
        throw new Error('Node not found:BFS Traversal');
      }
      if (currNode === destination) {
        return length;
      }
      const neighbourList: string[] = adjList.get(currNode) ?? [];
      for (const neighbour of neighbourList) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
    length += 1;
  }
  return length;
};
