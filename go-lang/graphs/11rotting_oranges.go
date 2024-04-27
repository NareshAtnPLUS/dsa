package graphs

import "data-structures/dsa-practice/utils"

var ROTTEN_ORANGE, FRESH_ORANGE, EMPTY_CELL = 2, 1, 0

func RottingOranges(grid [][]int) int {
	/*
		We have to find the shortest time it takes to rot all the oranges in the grid, the rotting spreads in all 4 directions
		so we are going to choose the bfs traversal. this will ensure that the time it takes is the shortest time.
	*/
	queue := utils.Queue{}
	freshOranges, timeTaken := 0, 0
	gridSize := &utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}

	for r, row := range grid {
		for c := range row {
			if grid[r][c] == FRESH_ORANGE {
				freshOranges += 1
			}
			if grid[r][c] == ROTTEN_ORANGE {
				queue.Enqueue(&utils.MatrixNode{r, c})
			}
		}
	}
	/*
		Stop processing the queue if there is nothing in the queue to process or there are no fresh oranges exists
	*/
	for len(queue) > 0 && freshOranges > 0 {
		queueLength := len(queue)
		for idx := 0; idx < queueLength; idx++ {
			currCell, _ := queue.Dequeue()
			r, c := currCell[0], currCell[1]
			for _, dir := range utils.Directions {
				dr, dc := dir[0], dir[1]
				nextRow, nextCol := r+dr, c+dc

				/*
					Dont process the nodes which are
						1. out of bounds
						2. rotten already
						3. empty cell
				*/
				if utils.Min(nextRow, nextCol) < 0 ||
					nextRow >= gridSize.Rows ||
					nextCol >= gridSize.Cols ||
					grid[nextRow][nextCol] == ROTTEN_ORANGE ||
					grid[nextRow][nextCol] == EMPTY_CELL {
					continue
				}
				// make it rotten, since it is a fresh orange. add it to queue for further rottening.
				grid[nextRow][nextCol] = ROTTEN_ORANGE
				queue.Enqueue(&utils.MatrixNode{nextRow, nextCol})
				freshOranges--
			}
		}
		timeTaken++
	}
	if freshOranges > 0 {
		return -1
	}
	return timeTaken
}
