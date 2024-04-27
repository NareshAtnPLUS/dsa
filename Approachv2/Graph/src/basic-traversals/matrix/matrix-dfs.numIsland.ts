import {MatrixNodeType} from '../types';
import {
  createNodeWithoutEnclosing,
  directions,
  getSize,
  rangeIn,
} from '../utils';

export const numIsland = (grid: string[][]) => {
  const gridSize = getSize(grid);
  const visited = new Set<string>();
  const dfs = (coordinates: MatrixNodeType, visited: Set<string>) => {
    const {r, c} = coordinates;
    const node = createNodeWithoutEnclosing([r, c]);
    if (
      !rangeIn(gridSize.ROWS, r) ||
      !rangeIn(gridSize.COLS, c) ||
      grid[r][c] === '0' ||
      visited.has(node)
    ) {
      return 0;
    }
    visited.add(node);
    const area: number =
      1 +
      directions
        .map(([dr, dc]) => {
          const [curr_row, curr_col] = [r + dr, c + dc];
          return dfs({r: curr_row, c: curr_col}, visited);
        })
        .reduce((a, b) => a + b, 0);
    return area;
  };
  const islands = [];
  for (let idx = 0; idx < gridSize.ROWS; idx++) {
    for (let jdx = 0; jdx < gridSize.COLS; jdx++) {
      const area = dfs({r: idx, c: jdx}, visited);
      if (area > 0) {
        islands.push(area);
      }
    }
  }
  return islands.length;
};
