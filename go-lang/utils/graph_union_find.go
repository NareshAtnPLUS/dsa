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

func (uf *UnionFind) Find(x int) int {
	if uf.parent[x] != x {
		// path compression to reach the highest parent node;
		uf.parent[x] = uf.Find(uf.parent[x])
	}
	return uf.parent[x]
}

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
