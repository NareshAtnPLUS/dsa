package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

/*
Pseudo code for this algorithm
1. initialize a map datastructure to record the visited set of nodes in the current iteration.
2. do dfs with the adjacency list
3. the base cases are
 1. if you visited the node already then there is no good in visiting it again so return 0
 2. if you visit the target, then return 1const
 3. intialize count to 0 and visit all the neighbours if you didnt pass the base cases
*/
func AdjacencyListDFS(graph *utils.Graph, target string) int {
	fmt.Println(graph)
	visited := make(utils.VistiedNodeMap)
	count := adjacencyDFS("A", target, &visited, graph)
	return count
}
func adjacencyDFS(node, target string, visited *utils.VistiedNodeMap, graph *utils.Graph) int {
	if (*visited)[node] {
		return 0
	}
	if node == target {
		return 1
	}

	count := 0
	(*visited)[node] = true
	for _, neighbours := range graph.Nodes[node].Neighbours {
		count += adjacencyDFS(neighbours.Val, target, visited, graph)
	}
	(*visited)[node] = false
	return count
}
