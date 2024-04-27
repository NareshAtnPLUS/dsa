package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

/*
Shortest path algorithm is a breadth first search approach
it searches for the destination path level by level

it uses queue for its first in first out processing
*/
func ShortestPathV2(grid [][]int) int {
	visited := make(map[utils.MatrixNode]bool)
	shortestPath := 0
	gridSize := &utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}
	destinationCordinates := &utils.Coordinates{
		R: gridSize.Rows - 1,
		C: gridSize.Cols - 1,
	}
	startingNode := utils.MatrixNode{0, 0}
	queue := utils.Queue{startingNode}
	visited[startingNode] = true

	for len(queue) > 0 {
		queueLen := len(queue)
		for idx := 0; idx < queueLen; idx++ {
			// pop out the node from the queue and start
			// processing the elements in the queue and expand
			// from the queue

			node, ok := queue.PopLeft()

			if ok {
				r, c := node[0], node[1]
				if r == destinationCordinates.R &&
					c == destinationCordinates.C {
					fmt.Println("Result from v2")
					return shortestPath
				}
				for _, dir := range utils.Directions {
					dr, dc := dir[0], dir[1]
					nr, nc := r+dr, c+dc
					nextNode := utils.MatrixNode{nr, nc}

					if utils.Min(nr, nc) < 0 ||
						nr == gridSize.Rows ||
						nc == gridSize.Cols ||
						visited[nextNode] ||
						grid[nr][nc] == 1 {
						continue
					}
					queue = append(queue, nextNode)
					visited[nextNode] = true
				}
			}
		}
		shortestPath++
	}
	fmt.Println("Result from v2")
	return shortestPath
}
