class GraphNode {
  val: string;
  neighbours: string[];
  constructor(value: string, neighbours?: string[]) {
    this.val = value;
    this.neighbours = neighbours ?? [];
  }
}

export const buildAdjacencyList = (edges: string[][]) => {
  const adjacencyList = new Map<string, string[]>();
  for (let [src, dst] of edges) {
    let srcList = adjacencyList.get(src);
    const dstList = adjacencyList.get(dst);
    // console.log(srcList,dstList)
    if (srcList === undefined) {
      srcList = [];
    }
    if (dstList === undefined) {
      adjacencyList.set(dst, []);
    }
    srcList.push(dst);
    adjacencyList.set(src, srcList);
  }
  return adjacencyList;
};
