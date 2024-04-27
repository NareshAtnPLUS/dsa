package graphs

import "data-structures/dsa-practice/utils"

func CloneGraphs(graph *utils.GraphNode) *utils.GraphNode {
	oldToNewHashMap := make(map[*utils.GraphNode]*utils.GraphNode)

	newGraph := dfsCloneGraph(graph, &oldToNewHashMap)
	return newGraph
}

func dfsCloneGraph(
	oldNode *utils.GraphNode,
	oldToNewHashMap *map[*utils.GraphNode]*utils.GraphNode,
) *utils.GraphNode {
	if newNode, ok := (*oldToNewHashMap)[oldNode]; ok {
		return newNode
	}
	newNode := &utils.GraphNode{
		Val: oldNode.Val,
	}
	(*oldToNewHashMap)[oldNode] = newNode
	for _, neighbour := range oldNode.Neighbours {
		newNode.Neighbours = append(newNode.Neighbours, dfsCloneGraph(neighbour, oldToNewHashMap))
	}
	return newNode
}

func bfsCloneGraph(
	oldNode *utils.GraphNode,
	oldToNewHashmap *map[*utils.GraphNode]*utils.GraphNode,
) *utils.GraphNode {
	if oldNode == nil {
		return nil
	}
	queue := utils.QueueGraphNode{}
	queue.Enqueue(oldNode)
	(*oldToNewHashmap)[oldNode] = &utils.GraphNode{
		Val: oldNode.Val,
	}
	for len(queue) > 0 {
		oldNode, _ := queue.Dequeue()
		for _, neighbor := range oldNode.Neighbours {
			if _, exists := (*oldToNewHashmap)[neighbor]; !exists {
				cloneNeighbour := &utils.GraphNode{
					Val: neighbor.Val,
				}
				(*oldToNewHashmap)[neighbor] = cloneNeighbour
				// new neighbor discovered so it should be processed.
				queue.Enqueue(neighbor)
			}
			(*oldToNewHashmap)[oldNode].Neighbours = append((*oldToNewHashmap)[oldNode].Neighbours, (*oldToNewHashmap)[neighbor])
		}
	}
	return (*oldToNewHashmap)[oldNode]
}
