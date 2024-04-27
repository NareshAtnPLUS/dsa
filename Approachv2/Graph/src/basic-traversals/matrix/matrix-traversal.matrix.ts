import {MatrixNodeType} from '../types';
import {
  createNodeWithoutEnclosing,
  directions,
  getSize,
  rangeIn,
} from '../utils';

export const maxAreaOfIsland = (grid: number[][]) => {
  const gridSize = getSize(grid);
  const visited = new Set<string>();
  const dfs = (coordinates: MatrixNodeType, visited: Set<string>): number => {
    const {r, c} = coordinates;
    const node = createNodeWithoutEnclosing([r, c]);
    if (
      !rangeIn(gridSize.ROWS, r) ||
      !rangeIn(gridSize.COLS, c) ||
      grid[r][c] === 0 ||
      visited.has(node)
    ) {
      return 0;
    }
    visited.add(node);
    const _area =
      1 +
      directions
        .map(([dr, dc]) => dfs({r: r + dr, c: c + dc}, visited))
        .reduce((a, b) => a + b, 0);

    return _area;
  };
  let area = 0;
  for (let idx = 0; idx < gridSize.ROWS; idx++) {
    for (let jdx = 0; jdx < gridSize.COLS; jdx++) {
      area = Math.max(area, dfs({r: idx, c: jdx}, visited));
    }
  }
  return area;
};
