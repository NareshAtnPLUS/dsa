class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}
const cloneGraph = (node: Node | null): Node | null => {
  const oldToNewMap = new Map<Node, Node>();
  if (node === null) {
    return null;
  }
  const dfs = (node: Node) => {
    // memoization of the oldToNewMap,
    //if we already visted the node we are return the sub graph of the node
    if (oldToNewMap.has(node)) {
      const _node = oldToNewMap.get(node);
      if (_node !== undefined) {
        return _node;
      }
    }

    // core copying algorithm
    const newNode = new Node(node.val);
    oldToNewMap.set(node, newNode);
    // now that we have new value in the new memory address, we can loop
    // through the neighbours and clone the neighbours sub graph
    for (let neighbor of node.neighbors) {
      const _neighbour = dfs(neighbor);
      //   console.log(
      //     `For the Node:${newNode.val} | neighbours are: ${_neighbours.val}`
      //   );
      newNode.neighbors.push(_neighbour);
    }
    // here we have the cloned sub graph
    return newNode;
  };
  const result = dfs(node);
  return result;
};
