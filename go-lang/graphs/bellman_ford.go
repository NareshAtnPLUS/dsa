package graphs

import (
	"data-structures/dsa-practice/utils"
	"math"
)

/*
Bellman ford algorithm. - using to find path with k stops with k stops in an directed graph.
in this algorithm we can incorporate the idea of k stops.
note: it can also deal with negative weights.

Time complexity. => O(E.K)
start from a source node and do a breadth first search.
while doing bfs, we are going to keep track of what is the minimum price of reaching the node.

k = 1; we do bfs for k + 1 iterations.
since we are start from  a, the  cost of reaching a from a is 0.  b and c are unknown so the distance to b and c are infinity or set to uint32max programatically.
initialize the cost array.

iterate for k+1 times
for every iteration,

	 create and store the values of the cost array into the temp array
	for every flight
	 	check if the cost of the source is known then
			store the minimum cost to reach the destination compare the already present cost in the temp array and the newly computed distance cost of source + price.
		(the idea here is we are going to update temporary cost arr for the destination only when we know that we can reach the source node.)
	finally after iterating through all the flights (edges).
	we update/assign the cost array with the temporary found values.
*/
var UNKNOWN_DISTANCE = math.MaxUint32

func FindCheapestPrice(n int, flights [][]int, src, dst, kStops int) int {
	cost := make(map[int]int)
	for idx := 0; idx <= n; idx++ {
		cost[idx] = UNKNOWN_DISTANCE
	}

	cost[src] = 0
	for itr := 0; itr <= kStops; itr++ {
		temp := make(map[int]int)
		utils.CopyMap(&cost, &temp)

		for _, flight := range flights {
			_src, _dst, _price := flight[0], flight[1], flight[2]

			if cost[_src] != UNKNOWN_DISTANCE {
				// we are able to update the temp[dst] because we know the cost to reach the source node from previous iteration.
				// so we compute the temp[dst] with the newly updated route, and compare it with the old route. which ever cost is lower we keep that.
				temp[_dst] = utils.Min(temp[_dst], cost[_src]+_price)
			}
		}
		cost = temp
	}

	if cost[dst] == UNKNOWN_DISTANCE {
		return -1
	}
	return cost[dst]

}
