package graphs

import "container/heap"

type MinHeap []Airport

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Airport))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

type Airport string
type Itinerary []Airport

func isDestinationPossibleFromSrc(srcDstGraph *map[Airport]*MinHeap, src Airport) bool {
	return (*srcDstGraph)[src] != nil
}
func isDestinationsAvailableFromSrc(srcDstGraph *map[Airport]*MinHeap, src Airport) bool {
	return len(*(*srcDstGraph)[src]) > 0
}
func FindItinerary(tickets [][]string) []string {
	srcDstGraph := make(map[Airport]*MinHeap)

	for _, ticket := range tickets {
		src, dst := Airport(ticket[0]), Airport(ticket[1])
		if srcDstGraph[src] == nil {
			srcDstGraph[src] = &MinHeap{}
		}
		heap.Push(srcDstGraph[src], dst)
	}

	for src := range srcDstGraph {
		// make sure the heap is valid
		heap.Init(srcDstGraph[src])
	}

	var _itinerary Itinerary

	var buildItinerary func(Airport)
	buildItinerary = func(src Airport) {
		for isDestinationPossibleFromSrc(&srcDstGraph, src) && isDestinationsAvailableFromSrc(&srcDstGraph, src) {
			destination := heap.Pop(srcDstGraph[src]).(Airport)
			buildItinerary(destination)
		}
		_itinerary = append(_itinerary, src)
	}
	buildItinerary("JFK")
	itinerary := make([]string, len(_itinerary))
	for idx, jdx := 0, len(_itinerary)-1; jdx >= 0; idx, jdx = idx+1, jdx-1 {
		itinerary[idx] = string(_itinerary[jdx])
	}
	return itinerary

}
