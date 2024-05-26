package graphs

import (
	"container/heap"
)

type Point [2]int // has x and y coordinate
type EdgePoint struct {
	Src, Dst Point
	Cost     int
}
type PriorityQueue []EdgePoint
type VisitedMap[K comparable] map[K]bool

func (pq PriorityQueue) Len() int {
	return len(pq)
}
func (pq PriorityQueue) Less(idx, jdx int) bool {
	return pq[idx].Cost < pq[jdx].Cost
}
func (pq PriorityQueue) Swap(idx, jdx int) {
	pq[idx], pq[jdx] = pq[jdx], pq[idx]
}

func (pq *PriorityQueue) Push(x interface{}) {
	*pq = append(*pq, x.(EdgePoint))
}
func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[:n-1]
	return item
}
func Abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
func manhattanDistance(x1, x2, y1, y2 int) int {
	return Abs(x1-x2) + Abs(y1-y2)
}
func MinCostConnectPoints(points [][]int) int {
	srcDstGraph := make(map[Point][]EdgePoint)
	mst := []EdgePoint{}
	mstCost := 0
	visited := make(VisitedMap[Point])
	edgeMinHeap := &PriorityQueue{}
	heap.Init(edgeMinHeap)
	for idx, pos1 := range points {
		x1, y1 := pos1[0], pos1[1]
		for _, pos2 := range points[idx+1:] {
			x2, y2 := pos2[0], pos2[1]
			distance := manhattanDistance(x1, x2, y1, y2)
			srcNode := Point{x1, y1}
			dstNode := Point{x2, y2}
			srcDstGraph[srcNode] = append(srcDstGraph[srcNode], EdgePoint{Src: srcNode, Dst: dstNode, Cost: distance})
			srcDstGraph[dstNode] = append(srcDstGraph[dstNode], EdgePoint{Src: dstNode, Dst: srcNode, Cost: distance})
		}
	}
	seedNode := Point{points[0][0], points[0][1]}
	visited[seedNode] = true
	for _, edge := range srcDstGraph[seedNode] {
		heap.Push(edgeMinHeap, edge)
	}

	for len(visited) < len(points) {
		if edgeMinHeap.Len() == 0 {
			return 0
		}
		edge, _ := heap.Pop(edgeMinHeap).(EdgePoint)

		if visited[edge.Dst] {
			continue
		}
		mst = append(mst, edge)
		mstCost += edge.Cost
		visited[edge.Dst] = true

		for _, nextEdge := range srcDstGraph[edge.Dst] {
			if !visited[nextEdge.Dst] {
				heap.Push(edgeMinHeap, nextEdge)
			}
		}
	}
	// fmt.Println(srcDstGraph, mst, visited, edgeMinHeap)
	return mstCost
}
