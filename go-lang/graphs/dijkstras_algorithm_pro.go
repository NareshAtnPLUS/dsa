package graphs

import (
	"container/heap"
	"data-structures/dsa-practice/utils"
	"fmt"
)

func DijkstrasShortestPathPro(edges []utils.Edge, n int, src string) (map[string]int, map[string]string) {
	// Build the adjacency list
	adj := make(map[string][]utils.Edge)
	for _, edge := range edges {
		adj[edge.Src] = append(adj[edge.Src], edge)
	}

	// Priority queue initialized with source
	pq := &utils.PriorityQueue{}
	shortest := make(map[string]int)
	prev := make(map[string]string) // Map to track the path
	heap.Push(pq, &utils.Item{Node: src, Distance: 0})
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
		for _, edge := range adj[currentNode] {
			nextNode, weight := edge.Dst, edge.Weight
			newDistance := current.Distance + weight
			if nextDist, ok := shortest[nextNode]; !ok || newDistance < nextDist {
				heap.Push(pq, &utils.Item{Node: nextNode, Distance: newDistance})
				prev[nextNode] = currentNode // Track the path
			}

		}
		fmt.Print(" -> ")
	}
	fmt.Println(pq)
	return shortest, prev
}
func ReconstructPath(src, target string, prev map[string]string) []string {
	path := []string{}
	for step := target; step != ""; step = prev[step] {
		path = append(path, step)
		if step == src {
			break
		}
	}
	// Reverse the path to get the correct order from source to target
	for i, j := 0, len(path)-1; i < j; i, j = i+1, j-1 {
		path[i], path[j] = path[j], path[i]
	}
	return path
}
func DrawPath(path []string) {
	for idx, node := range path {
		if idx != 0 {
			fmt.Print(" --> ")
		}
		fmt.Printf("%v", node)

	}
}
