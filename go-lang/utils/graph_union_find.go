package utils

type UnionFind struct {
	parent, rank []int
}

func NewUnionFind(size int) *UnionFind {
	_parent := make([]int, size)
	_rank := make([]int, size)

	// initally there are no unions of nodes; so the parent of each node is themselves
	for idx := range _parent {
		_parent[idx] = idx
	}

	return &UnionFind{
		parent: _parent,
		rank:   _rank,
	}
}

// this function uses path compression and will find the root parent for the given node
func (uf *UnionFind) Find(x int) int {
	if uf.parent[x] != x {
		// path compression to reach the highest parent node;
		uf.parent[x] = uf.Find(uf.parent[x])
	}
	return uf.parent[x]
}

// Union merges the sets containing x and y. It uses the union by rank strategy
// to keep the tree heights low. In union by rank, the root of the tree with
// lower rank points to the root of the tree with higher rank. If the ranks
// are the same, one root points to the other, and the rank of the resulting root
// is incremented by one. This function ensures the UnionFind structure remains
// balanced, improving the efficiency of future Find and Union operations.
//
// Parameters:
//
//	x (int): An element from the first set.
//	y (int): An element from the second set.
//
// Returns:
//
//	bool: Returns true if the union was performed (i.e., x and y were in different sets).
//	      Returns false if no union was needed because x and y were already in the same set.
//
// The function performs the following steps:
//  1. Finds the roots (representatives) of the sets containing x and y using the path
//     compressed Find method.
//  2. If the roots are different, it performs a union:
//     - If the rank of rootX is greater than rootY, rootY's parent is set to rootX.
//     - If the rank of rootY is greater than rootX, rootX's parent is set to rootY.
//     - If the ranks are the same, rootY's parent is set to rootX and rootX's rank
//     is incremented by one.
//  3. Returns true if a union was made, otherwise false if x and y were already in the same set.
func (uf *UnionFind) Union(x, y int) bool {
	rootX := uf.Find(x)
	rootY := uf.Find(y)

	if rootX != rootY {
		if uf.rank[rootX] > uf.rank[rootY] {
			uf.parent[rootY] = rootX
		} else if uf.rank[rootX] < uf.rank[rootY] {
			uf.parent[rootX] = rootY
		} else {
			uf.parent[rootY] = rootX
			uf.rank[rootX]++
		}
		return true
	}
	return false
}
