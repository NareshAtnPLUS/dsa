import {bfsAdjacencyList} from './basic-traversals/adjacency-list-intro/bfs-adjacencylist';
import {dfsAdjacencyList} from './basic-traversals/adjacency-list-intro/dfs-adjacencylist';
import {buildAdjacencyList} from './basic-traversals/adjacency-list-intro/generate-graph';
import {numIsland} from './basic-traversals/matrix/matrix-dfs.numIsland';
import {matrixTraversal} from './basic-traversals/matrix/matrix-traversal';
import {bfsTraversal} from './basic-traversals/matrix/matrix-traversal-bfs';
import {pacificAtlantic} from './basic-traversals/matrix/matrix-traversal-dfs.pacific-atlantic';
import {maxAreaOfIsland} from './basic-traversals/matrix/matrix-traversal.matrix';

// const main = () => {
//   // const matrix = [
//   //   [0, 0, 0, 0],
//   //   [1, 1, 0, 0],
//   //   [0, 0, 0, 1],
//   //   [0, 1, 0, 0],
//   // ];
//   // const grid = [
//   //   [0, 0, 0, 0],
//   //   [1, 1, 0, 0],
//   //   [0, 0, 0, 1],
//   //   [0, 1, 0, 0],
//   // ];
//   // console.log(`Shortest path to the destination node: ${bfsTraversal(grid)}`);
//   // console.log(
//   //   `Num ways to traverse from source to destination: ${matrixTraversal(
//   //     matrix
//   //   )}`
//   // );
//   const edges = [
//     ['A', 'B'],
//     ['B', 'C'],
//     ['C', 'E'],
//     // ['B', 'E'],

//     ['E', 'D'],
//   ];
//   const adjList = buildAdjacencyList(edges);
//   console.log('adjList', adjList);
//   const pathDistance = dfsAdjacencyList(adjList, 'E');
//   console.log('pathDistance', pathDistance);

//   const shortestPathDistance = bfsAdjacencyList(adjList, 'A', 'E');
//   console.log('pathDistance', shortestPathDistance);
// };
// main();

const mainProblems = () => {
  const grid = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ];
  const result = pacificAtlantic(grid);
  console.log(`num islands:${result}`);
};
mainProblems();
