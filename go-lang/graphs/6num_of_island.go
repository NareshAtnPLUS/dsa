package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

/*
num of island can be calculated by finding
*/
func NumIsland(grid [][]string) int {
	islandArea := make([]int, 0)
	visited := make(map[[2]int]bool)
	gridSize := &utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}
	for idx := 0; idx < gridSize.Rows; idx++ {
		for jdx := 0; jdx < gridSize.Cols; jdx++ {
			area := dfsArea(idx, jdx, gridSize, &visited, &grid)
			if area > 0 {
				islandArea = append(islandArea, area)
			}
		}
	}
	return len(islandArea)
}
func dfsArea(r, c int, gridSize *utils.GridSize, visited *map[[2]int]bool, grid *[][]string) int {

	node := [2]int{r, c}
	fmt.Println(node)
	if (r < 0 || r >= gridSize.Rows) ||
		(c < 0 || c >= gridSize.Cols) ||
		((*visited)[node]) ||
		(*grid)[r][c] == "0" {
		return 0
	}
	(*visited)[node] = true
	area := 1
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		area += dfsArea(r+dr, c+dc, gridSize, visited, grid)
	}

	return area
}
