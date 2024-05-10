package graphs

import "data-structures/dsa-practice/utils"

func PacificAtlantic(heights [][]int) []utils.MatrixNode {
	gridSize := &utils.GridSize{
		Rows: len(heights),
		Cols: len(heights[0]),
	}
	pacificToAtlantic, atlanticToPacific := make(map[utils.MatrixNode]bool), make(map[utils.MatrixNode]bool)
	result := make([]utils.MatrixNode, 0)
	for col := 0; col < gridSize.Cols; col++ {
		dfsTransOcean(0, col, heights[0][col], &pacificToAtlantic, gridSize, &heights)
		dfsTransOcean(gridSize.Rows-1, col, heights[gridSize.Rows-1][col], &atlanticToPacific, gridSize, &heights)
	}
	for row := 0; row < gridSize.Rows; row++ {
		dfsTransOcean(row, 0, heights[row][0], &pacificToAtlantic, gridSize, &heights)
		dfsTransOcean(row, gridSize.Cols-1, heights[row][gridSize.Cols-1], &atlanticToPacific, gridSize, &heights)
	}
	for r, row := range heights {
		for c := range row {
			node := utils.MatrixNode{r, c}
			if pacificToAtlantic[node] && atlanticToPacific[node] {
				result = append(result, node)
			}
		}
	}
	return result
}

func PacificAtlanticV2(heights [][]int) []utils.MatrixNode {
	gridSize := &utils.GridSize{
		Rows: len(heights),
		Cols: len(heights[0]),
	}
	pacificToAtlanticMap, atlanticToPacificMap := make(map[utils.MatrixNode]bool), make(map[utils.MatrixNode]bool)

	for col := 0; col < gridSize.Cols; col++ {
		pacificOriginCoordinates := utils.Coordinates{R: 0, C: col}
		pacificOriginHeight := heights[0][col]
		atlanticOriginCoordinates := utils.Coordinates{R: gridSize.Rows - 1, C: col}
		atlanticOriginHeight := heights[gridSize.Rows-1][col]
		// discover from pacific to atlantic
		dfsTransOceanV2(pacificOriginCoordinates, pacificOriginHeight, &pacificToAtlanticMap, gridSize, &heights)
		// discover from atlantic to pacific
		dfsTransOceanV2(atlanticOriginCoordinates, atlanticOriginHeight, &atlanticToPacificMap, gridSize, &heights)
	}
	for row := 0; row < gridSize.Rows; row++ {
		pacificToAtlanticCoordinates := utils.Coordinates{R: row, C: 0}
		pacificOriginHeight := heights[row][0]
		atlanticToPacificCoordinates := utils.Coordinates{R: row, C: gridSize.Cols - 1}
		atlanticOriginHeight := heights[row][gridSize.Cols-1]

		dfsTransOceanV2(pacificToAtlanticCoordinates, pacificOriginHeight, &pacificToAtlanticMap, gridSize, &heights)
		dfsTransOceanV2(atlanticToPacificCoordinates, atlanticOriginHeight, &atlanticToPacificMap, gridSize, &heights)
	}
	result := utils.IntersectMap(pacificToAtlanticMap, atlanticToPacificMap)
	return result
}
func dfsTransOcean(r, c, prevHeight int, visited *map[utils.MatrixNode]bool, gridSize *utils.GridSize, heights *[][]int) {
	node := utils.MatrixNode{r, c}

	if utils.Min(r, c) < 0 ||
		r >= gridSize.Rows ||
		c >= gridSize.Cols ||
		(*visited)[node] ||
		prevHeight > (*heights)[r][c] {
		// if previous height is greater than next height, then water will not flow.
		return
	}
	nextHeight := (*heights)[r][c]
	(*visited)[node] = true
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		dfsTransOcean(r+dr, c+dc, nextHeight, visited, gridSize, heights)
	}
}

func dfsTransOceanV2(coordinates utils.Coordinates, prevHeight int, visited *map[utils.MatrixNode]bool, gridSize *utils.GridSize, heights *[][]int) {
	r, c := coordinates.R, coordinates.C
	node := utils.MatrixNode{r, c}
	currHeight := (*heights)[r][c]

	if utils.Min(r, c) < 0 ||
		r >= gridSize.Rows || c >= gridSize.Cols ||
		(*visited)[node] ||
		prevHeight > currHeight {
		return
	}

	(*visited)[node] = true
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		nextCoordinates := utils.Coordinates{R: r + dr, C: c + dc}
		dfsTransOceanV2(nextCoordinates, currHeight, visited, gridSize, heights)
	}
}
