package graphs

import (
	"container/heap"
	"data-structures/dsa-practice/utils"
)

type SwimmingCoornidates struct {
	R, C, Elevation int
}
type SwimmingMinHeap []SwimmingCoornidates

func (pq SwimmingMinHeap) Len() int {
	return len(pq)
}
func (pq SwimmingMinHeap) Less(idx, jdx int) bool {
	return pq[idx].Elevation < pq[jdx].Elevation
}
func (pq SwimmingMinHeap) Swap(idx, jdx int) {
	pq[idx], pq[jdx] = pq[jdx], pq[idx]
}

func (pq *SwimmingMinHeap) Push(x interface{}) {
	*pq = append(*pq, x.(SwimmingCoornidates))
}
func (pq *SwimmingMinHeap) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[:n-1]
	return item
}

func SwimWater(grid [][]int) int {
	maxHeightInDiscovedPath := 0
	gridSize := &utils.GridSize{
		Rows: len(grid),
		Cols: len(grid[0]),
	}
	destinationCoordinates := &SwimmingCoornidates{
		R:         gridSize.Rows - 1,
		C:         gridSize.Cols - 1,
		Elevation: grid[gridSize.Rows-1][gridSize.Cols-1],
	}
	startingCoordinates := SwimmingCoornidates{0, 0, grid[0][0]}
	visited := make(utils.VisitedMap[SwimmingCoornidates])
	swimmingMinHeap := &SwimmingMinHeap{}
	heap.Init(swimmingMinHeap)
	heap.Push(swimmingMinHeap, startingCoordinates)

	for len(*swimmingMinHeap) > 0 {
		node := heap.Pop(swimmingMinHeap).(SwimmingCoornidates)

		if node.R == destinationCoordinates.R && node.C == destinationCoordinates.C {
			return maxHeightInDiscovedPath
		}
		maxHeightInDiscovedPath = utils.Max(node.Elevation, maxHeightInDiscovedPath)
		visited[node] = true

		for _, dir := range utils.Directions {
			dr, dc := dir[0], dir[1]
			nextCoordinates := utils.Coordinates{R: node.R + dr, C: node.C + dc}

			if utils.IsOutOfBounds(nextCoordinates, gridSize) {
				continue
			}
			nextSwimmingNode := SwimmingCoornidates{R: nextCoordinates.R, C: nextCoordinates.C, Elevation: grid[nextCoordinates.R][nextCoordinates.C]}
			if visited[nextSwimmingNode] {
				continue
			}
			heap.Push(swimmingMinHeap, nextSwimmingNode)
		}

	}

	return maxHeightInDiscovedPath
}
