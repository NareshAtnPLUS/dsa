package graphs

import (
	"container/heap"
	"data-structures/dsa-practice/utils"
)

func KruskalsAlgorithmWithMinHeap(edges []utils.EdgeInt, n int) []utils.EdgeInt {
	pq := make(utils.PriorityQueueInt, len(edges))
	copy(pq, edges)
	heap.Init(&pq)

	uf := utils.NewUnionFind(n + 1)

	mst := []utils.EdgeInt{}
	for pq.Len() > 0 && len(mst) < n-1 {
		edge := heap.Pop(&pq).(utils.EdgeInt)

		if uf.Find(edge.Src) != uf.Find(edge.Dst) {
			mst = append(mst, edge)
			uf.Union(edge.Src, edge.Dst)
		}
	}
	return mst
}
