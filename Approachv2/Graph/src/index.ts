import {matrixTraversal} from './basic-traversals/matrix-traversal';
import {bfsTraversal} from './basic-traversals/matrix-traversal-bfs';

const main = () => {
  const matrix = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ];
  const grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ];
  console.log(`Shortest path to the destination node: ${bfsTraversal(grid)}`);
  console.log(
    `Num ways to traverse from source to destination: ${matrixTraversal(
      matrix
    )}`
  );
};
main();
