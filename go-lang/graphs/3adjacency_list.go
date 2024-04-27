package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

func CreateAdjacencyList(edges [][]string) *utils.Graph {
	graph := utils.NewGraph()

	// adding links for the nodes

	for _, links := range edges {
		x, y := links[0], links[1]

		graph.AddLink(x, y)
	}
	fmt.Println(graph)
	for _, node := range graph.Nodes {
		fmt.Printf("Node %s has neighbours", node.Val)
		for _, neighbour := range node.Neighbours {
			fmt.Printf("%s", neighbour.Val)
		}
		fmt.Println()
	}
	return graph
}
