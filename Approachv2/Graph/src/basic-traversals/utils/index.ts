import {MatrixNodeType} from '../types';

export const rangeIn = (max: number, num: number) => num >= 0 && num < max;
export const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
export const initialPosition = {r: 0, c: 0};
export const getSize = (grid: number[][] | string[][]) => ({
  ROWS: grid.length,
  COLS: grid[0].length,
});
export const createNode = ({r, c}: MatrixNodeType) => `(${r},${c})`;
export const createNodeWithoutEnclosing = (
  coordinates: number[] | string[]
) => {
  const [r, c] = coordinates;
  return `${r},${c}`;
};
