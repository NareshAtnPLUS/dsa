package graphs

import "data-structures/dsa-practice/utils"

/*
	Breadth first algorithm for finding shortest path between two given nodes.

	1. Initialize the following variables
		a. visited map
		b. shortest distance int
		c. queue for processing in bfs
*/

func AdjacencyListBFS(graph *utils.Graph, source, target string) int {
	shortestDistance := 0
	visited := make(utils.VistiedNodeMap)
	queue := utils.QueueStr{}

	visited[source] = true
	queue = append(queue, source)

	for len(queue) > 0 {
		queueLength := len(queue)
		for idx := 0; idx < queueLength; idx++ {
			curr, _ := queue.PopLeft()

			if curr == target {
				return shortestDistance
			}
			for _, neighbours := range graph.Nodes[curr].Neighbours {
				nxt := neighbours.Val
				if !visited[nxt] {
					visited[nxt] = true
					queue = append(queue, nxt)
				}
			}
		}
		shortestDistance++
	}
	return shortestDistance

}
