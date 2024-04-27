export const dfsAdjacencyList = (
  adjacencyList: Map<string, string[]>,
  destination: string
) => {
  const visited = new Set<string>();

  const dfs = (node: string, visited: Set<string>) => {
    if (visited.has(node)) {
      return 0;
    }
    if (node === destination) {
      return 1;
    }
    let count = 0;
    visited.add(node);
    const neighboursList = adjacencyList.get(node) ?? [];
    for (const neighbour of neighboursList) {
      console.log(
        `visiting neighbour:${neighbour} for node:${node} and curr count:${count}`
      );
      count = count + dfs(neighbour, visited);
      console.log(
        `visited neighbour:${neighbour} for node:${node} and updated count:${count}`
      );
    }
    // we are removing the node from the visited set, because the same recursion should have repeated visiting nodes.
    visited.delete(node);
    return count;
  };
  const pathDistance = dfs('A', visited);
  return pathDistance + 1;
};
