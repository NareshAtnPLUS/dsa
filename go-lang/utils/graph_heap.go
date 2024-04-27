package utils

type EdgeInt struct {
	Src, Dst, Weight int
}

type PriorityQueueInt []EdgeInt

func (pq PriorityQueueInt) Len() int {
	return len(pq)
}
func (pq PriorityQueueInt) Less(idx, jdx int) bool {
	return pq[idx].Weight < pq[jdx].Weight
}
func (pq PriorityQueueInt) Swap(idx, jdx int) {
	pq[idx], pq[jdx] = pq[jdx], pq[idx]
}

func (pq *PriorityQueueInt) Push(x interface{}) {
	*pq = append(*pq, x.(EdgeInt))
}
func (pq *PriorityQueueInt) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[:n-1]
	return item
}
