package utils

/*
	This package contains methods to create and develop a new graph
	To create a graph, we need.
	1. Graph Constructor
	2. Graph Node
	3. Graph Methods
		1. Add Node
		2. Add Link
*/

type GraphNode struct {
	/*
		Graph Node contains val and Neighbours
	*/
	Val        string
	Neighbours []*GraphNode
}
type Graph struct {
	/*
		Graph contains a map of GraphNodes
	*/
	Nodes map[string]*GraphNode
}

func NewGraph() *Graph {
	return &Graph{
		Nodes: make(map[string]*GraphNode, 0),
	}
}

/*
	Essential Graph Methods
*/

func (graph *Graph) AddNode(node string) *GraphNode {
	if _, exists := graph.Nodes[node]; !exists {
		graph.Nodes[node] = &GraphNode{Val: node}
	}
	return graph.Nodes[node]
}

func (graph *Graph) AddLink(val1, val2 string) {
	node1 := graph.AddNode(val1)
	node2 := graph.AddNode(val2)

	node1.Neighbours = append(node1.Neighbours, node2)
	node2.Neighbours = append(node2.Neighbours, node1)
}
