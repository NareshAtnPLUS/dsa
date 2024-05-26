package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

/*
In an undirected having no of nodes = no of edges
will create a cycle. This problem is focussed on detecting the
rendundant edge, on removal of the edge, the cyclical
undirected graph will become a tree or acyclical graph

The method or algoritm used to find redundant connection is called
union - find algorithm.
There are lot of union find algorithm
one of the methods is ranking method

union is unioning the rank of every node.
adding the rank for every parent

find is finding what is the parent of that node.
*/
func initializeParents(parents *[]int) {
	_parents := (*parents)
	for idx := range _parents {
		_parents[idx] = idx
	}
}
func FindRedundantConnection(edges [][]int) []int {
	if len(edges) == 0 {
		return nil
	}
	// defining the slices for parents and ranks
	edgesLen := len(edges)
	parents, rank := make([]int, edgesLen+1), make([]int, edgesLen+1)
	initializeParents(&parents)
	for _, edge := range edges {
		x, y := edge[0], edge[1]
		if !union(x, y, &parents, &rank) {
			fmt.Printf("The parent, rank before we exit the loop is \n%v\n%v", parents, rank)
			return []int{x, y}
		}
	}
	return []int{}
}

/*
Given a node n we have to find what it's parent is?
*/
func find(parents *[]int, node int) int {
	_parents := (*parents)
	if _parents[node] != node {
		_parents[node] = find(parents, _parents[node])
	}
	return _parents[node]
}

/*
when we have given two nodes, n1 and n2 we have to union them together
when we union them,first we have to find their root parents.

return false
this indicates that they have already merged. so we cannot complete
that's how we find a redundant connection.
*/
func union(x, y int, parents *[]int, rank *[]int) bool {
	fmt.Println("---------------------------------")

	_rank, _parents := (*rank), (*parents)
	rootX, rootY := find(parents, x), find(parents, y)

	fmt.Printf("\nProcessing x:%d, y:%d....\nRoots-> x: %d y: %d\n", x, y, rootX, rootY)
	fmt.Printf("\nRank rootX: %d; Rank rootY: %d", _rank[rootX], _rank[rootY])
	// if both parents are same, we cannot do union for the given nodes.
	// these nodes have a path to the root node already.
	if rootX == rootY {
		fmt.Println("---------------------------------")
		return false
	}

	if _rank[rootX] > _rank[rootY] {
		fmt.Println("\nbefore updating...")
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nperforming _rank[rootX] > _rank[rootY] operation")
		_parents[rootY] = rootX
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nafter updating...")
	} else if _rank[rootX] < _rank[rootY] {
		fmt.Println("\nbefore updating...")
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nperforming _rank[rootX] < _rank[rootY] operation")
		_parents[rootX] = rootY
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nafter updating...")
	} else {

		fmt.Println("\nbefore updating...")
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nperforming equal operation")
		_parents[rootY] = rootX
		_rank[rootX]++
		fmt.Printf("\nparents:%v\nrank:%v", parents, rank)
		fmt.Println("\nafter updating...")
	}
	fmt.Println("---------------------------------")
	return true

}
func FindRedundantConnectionV2(edges [][]int) []int {
	edgesLen := len(edges)
	if edgesLen == 0 {
		return nil
	}

	uf := utils.NewUnionFind(edgesLen + 1)
	for _, edge := range edges {
		src, dst := edge[0], edge[1]

		if uf.Find(src) != uf.Find(dst) {
			return []int{src, dst}
		} else {
			uf.Union(src, dst)
		}
	}
	return []int{}
}
