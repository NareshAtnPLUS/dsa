package graphs

import "data-structures/dsa-practice/utils"

func UniquePaths(grid [][]int) int {
	visited := make(map[utils.MatrixNode]bool)
	gridSize := utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}

	destinationCordinates := utils.Coordinates{
		R: gridSize.Rows - 1,
		C: gridSize.Cols - 1,
	}
	numWays := dfs(utils.Coordinates{R: 0, C: 0}, &destinationCordinates, &visited, &gridSize, &grid)
	return numWays
}

func dfs(co_ordinates utils.Coordinates, destinationCordinates *utils.Coordinates, visited *map[utils.MatrixNode]bool, gridSize *utils.GridSize, grid *[][]int) int {
	r, c := co_ordinates.R, co_ordinates.C
	node := utils.MatrixNode{r, c}
	/*
		checking for the base cases
		1. dont go unbound
		2. dont visit the same node
		3. dont visit blocked paths
	*/

	if utils.Min(r, c) < 0 ||
		r == gridSize.Rows ||
		c == gridSize.Cols ||
		(*visited)[node] ||
		(*grid)[r][c] == 1 {
		return 0
	}
	// if its is a destination then return 1
	if r == destinationCordinates.R && c == destinationCordinates.C {
		return 1
	}
	//  before branching to other nodes make a note that we visited the node.
	(*visited)[node] = true

	// creating a variable so that we can return the count
	var count int = 0
	for _, direction := range utils.Directions {
		dr, dc := direction[0], direction[1]
		count += dfs(utils.Coordinates{R: r + dr, C: c + dc}, destinationCordinates, visited, gridSize, grid)
	}
	delete(*visited, node)
	return count
}
