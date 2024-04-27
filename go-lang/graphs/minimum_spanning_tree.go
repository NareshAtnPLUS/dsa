package graphs

import (
	"container/heap"
	"data-structures/dsa-practice/utils"
)

/*
The algorithm used to find minimum spanning tree is prim's algorithm.

Minimum spanning tree -> acyclical, undirected connected graph is called minimum spanning tree.

In a minimum spanning tree, if there are n nodes, there are n - 1 edges
this is the condition that minimum spanning tree has

N nodes = N - 1 edges.
*/
func CreateMinimumSpanningTree(edges []utils.EdgeInt, n, src int) []utils.EdgeInt {
	visited := make(map[int]bool)
	adj := make(map[int][]utils.EdgeInt)
	mst := []utils.EdgeInt{}
	edgeMinHeap := &utils.PriorityQueueInt{}

	// creating an adjacency list
	for _, edge := range edges {
		adj[edge.Src] = append(adj[edge.Src], utils.EdgeInt{Src: edge.Src, Dst: edge.Dst, Weight: edge.Weight})
		adj[edge.Dst] = append(adj[edge.Dst], utils.EdgeInt{Src: edge.Dst, Dst: edge.Src, Weight: edge.Weight})
	}

	// initialize the min heap to start the prim's algorithm
	for _, edge := range adj[src] {
		heap.Push(edgeMinHeap, edge)
	}
	visited[src] = true

	// as soon as we visit all the nodes we break from the loop.
	for len(visited) < n {
		if edgeMinHeap.Len() == 0 {
			// we have come to a disconnected graph condition.
			return nil
		}
		edge := heap.Pop(edgeMinHeap).(utils.EdgeInt)
		// check if we have visited the destination node already, if it is then dont process the node.
		if visited[edge.Dst] {
			continue
		}

		mst = append(mst, edge)
		visited[edge.Dst] = true

		for _, nextEdge := range adj[edge.Dst] {
			if !visited[edge.Dst] {
				heap.Push(edgeMinHeap, nextEdge)
			}
		}
	}

	return mst
}
