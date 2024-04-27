package graphs

import "data-structures/dsa-practice/utils"

func MaxAreaIsland(grid [][]int) int {
	maxAreaIsland := 0
	visited := make(map[utils.MatrixNode]bool)
	gridSize := &utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}
	for idx, row := range grid {
		for jdx := range row {
			area := dfsMaxAreaIsland(idx, jdx, gridSize, &visited, &grid)
			maxAreaIsland = Max(maxAreaIsland, area)
		}
	}
	return maxAreaIsland
}
func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
func dfsMaxAreaIsland(r, c int, gridSize *utils.GridSize, visited *map[utils.MatrixNode]bool, grid *[][]int) int {
	node := utils.MatrixNode{r, c}
	if (r < 0 || r >= gridSize.Rows) ||
		(c < 0 || c >= gridSize.Cols) ||
		(*visited)[node] ||
		(*grid)[r][c] == 0 {
		return 0
	}
	(*visited)[node] = true
	area := 1
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		area += dfsMaxAreaIsland(r+dr, c+dc, gridSize, visited, grid)
	}
	return area
}
