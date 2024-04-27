package graphs

import (
	"container/heap"
	"data-structures/dsa-practice/utils"
	"fmt"
)

func DijkstrasShortestPath(edges []utils.Edge, n int, src string) map[string]int {
	// Build the adjacency list
	adj := make(map[string][]utils.Edge)
	for _, edge := range edges {
		adj[edge.Src] = append(adj[edge.Src], edge)
	}

	// Priority queue initialized with source
	pq := &utils.PriorityQueue{}
	shortest := make(map[string]int)
	heap.Push(pq, &utils.Item{Node: src, Distance: 0})
	maxTimeToReachAllNodes := -1
	for pq.Len() > 0 {
		// this heap which is a minimum priority queue, it will only pop the minimum value.
		current := heap.Pop(pq).(*utils.Item)

		currentNode := current.Node
		fmt.Printf("Node %v", currentNode)
		if _, ok := shortest[currentNode]; ok {
			// if we visited th currentNode already, then continue the
			// iteration. dont process any for this node.

			continue
		}
		// if currentNode == "D" {
		// 	fmt.Println()
		// 	return shortest
		// }
		shortest[currentNode] = current.Distance
		if current.Distance > 0 {
			maxTimeToReachAllNodes = utils.Max(maxTimeToReachAllNodes, current.Distance)
		}
		for _, edge := range adj[currentNode] {
			nextNode, weight := edge.Dst, edge.Weight

			if _, ok := shortest[nextNode]; !ok {
				// we did not visit the next node, then only  process the nextNode
				heap.Push(pq, &utils.Item{Node: nextNode, Distance: current.Distance + weight})
			}

		}
		fmt.Print(" -> ")
	}

	fmt.Printf("\nmax time to reach: %d\n", maxTimeToReachAllNodes)
	fmt.Println(pq)
	return shortest
}
