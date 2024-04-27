import {MatrixNodeType} from '../types';
import {
  createNodeWithoutEnclosing,
  directions,
  getSize,
  rangeIn,
} from '../utils';

export function pacificAtlantic(heights: number[][]): number[][] {
  const gridSize = getSize(heights);
  const [pacific, atlantic] = [new Set<string>(), new Set<string>()];
  const result: number[][] = [];
  const dfs = (
    coordinates: MatrixNodeType,
    visited: Set<string>,
    prevHeight: number
  ) => {
    const {r, c} = coordinates;
    const node = createNodeWithoutEnclosing([r, c]);
    if (rangeIn(gridSize.COLS, c) && rangeIn(gridSize.ROWS, r)) {
      console.log(
        `node:${node}|prevHeight:${prevHeight}|value:${
          heights[r][c]
        }|heights[r][c] < prevHeight:${heights[r][c] < prevHeight}`
      );
    }
    if (
      visited.has(node) ||
      !rangeIn(gridSize.COLS, c) ||
      !rangeIn(gridSize.ROWS, r) ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    const curr_height = heights[r][c];
    visited.add(node);
    directions.forEach(([dr, dc]) =>
      dfs({r: r + dr, c: c + dc}, visited, curr_height)
    );
  };
  // go through every single column in the first row -> for pacific to reach atlantic
  // go through every single column in the last row -> for atlantic to react pacific
  console.log(
    Array(10).fill('-').join(''),
    'vertical',
    Array(10).fill('-').join('')
  );
  for (let col = 0; col < gridSize.COLS; col++) {
    console.log(
      Array(10).fill('-').join(''),
      'pacific -> atlantic',
      Array(10).fill('-').join('')
    );
    dfs({r: 0, c: col}, pacific, heights[0][col]);
    console.log(
      Array(10).fill('-').join(''),
      'atlantic -> pacific',
      Array(10).fill('-').join('')
    );
    dfs(
      {r: gridSize.ROWS - 1, c: col},
      atlantic,
      heights[gridSize.ROWS - 1][col]
    );
  }
  // go through every single row in the first column -> for pacific to reach atlantic
  // go through every single row in the last column -> for atlantic to reach pacific
  console.log(
    Array(10).fill('-').join(''),
    'horizontal',
    Array(10).fill('-').join('')
  );
  for (let row = 0; row < gridSize.ROWS; row++) {
    console.log(
      Array(10).fill('-').join(''),
      'pacific -> atlantic',
      Array(10).fill('-').join('')
    );
    dfs({r: row, c: 0}, pacific, heights[row][0]);
    console.log(
      Array(10).fill('-').join(''),
      'atlantic -> pacific',
      Array(10).fill('-').join('')
    );
    dfs(
      {r: row, c: gridSize.COLS - 1},
      atlantic,
      heights[row][gridSize.COLS - 1]
    );
  }
  console.log('pacific', pacific);
  console.log('atlantic', atlantic);
  // if the node contains in both the pacific and atlantic sets
  // then from these nodes the water can flow from pacific to atlantic and vice versa
  let res2: string[] = [];
  for (let row = 0; row < gridSize.ROWS; row++) {
    for (let col = 0; col < gridSize.COLS; col++) {
      const node = createNodeWithoutEnclosing([row, col]);
      if (pacific.has(node) && atlantic.has(node)) {
        const val = node.split(',').map(it => parseInt(it));
        result.push(val);
        res2.push(node);
      }
    }
  }
  console.log(res2);
  return result;
}
