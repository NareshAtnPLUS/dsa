package utils

type Coordinates struct {
	R int
	C int
}
type VisitedMap[K comparable] map[K]bool
type GridSize struct {
	Rows int
	Cols int
}
type MatrixNode [2]int

var Directions = [4][2]int{{1, 0}, {0, 1}, {-1, 0}, {0, -1}}

type Queue []MatrixNode

func (queue *Queue) PopLeft() (MatrixNode, bool) {
	if len(*queue) == 0 {
		return MatrixNode{}, false
	}

	firstElement := (*queue)[0]

	*queue = (*queue)[1:]

	return firstElement, true
}
func (queue *Queue) Dequeue() (MatrixNode, bool) {
	if len(*queue) == 0 {
		return MatrixNode{}, false
	}

	firstElement := (*queue)[0]

	*queue = (*queue)[1:]

	return firstElement, true
}
func Min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

type VistiedNodeMap = map[string]bool
type QueueStr []string

func (q *QueueStr) PopLeft() (string, bool) {
	if len(*q) == 0 {
		return "", false
	}
	firstElement := (*q)[0]
	*q = (*q)[1:]
	return firstElement, true
}

type QueueGraphNode []*GraphNode

func (q *QueueGraphNode) Dequeue() (*GraphNode, bool) {
	if len(*q) == 0 {
		return nil, false
	}
	firstElement := (*q)[0]
	*q = (*q)[1:]
	return firstElement, true
}
func (q *QueueGraphNode) Enqueue(node *GraphNode) {
	*q = append(*q, node)
}
func (q *Queue) Enqueue(node *MatrixNode) {
	*q = append(*q, *node)
}
func (q *QueueStr) Enqueue(node string) {
	*q = append(*q, node)
}
func (q *QueueStr) Dequeue() (string, bool) {
	if len(*q) == 0 {
		return "", false
	}
	firstElement := (*q)[0]
	*q = (*q)[1:]
	return firstElement, true
}

//	func IsInBounds(r,c int, gridSize *GridSize) {
//		return r >= 0 && r <= gridSize.Rows
//	}
func CopyMap(src, dst *map[int]int) {
	for key, value := range *src {
		(*dst)[key] = value
	}
}
func intersect(slice1, slice2 []int) []int {
	// Use a map to count occurrences in the first slice
	elemCount := make(map[int]bool)
	for _, item := range slice1 {
		elemCount[item] = true
	}

	// Collect elements that appear in both slices
	var intersection []int
	for _, item := range slice2 {
		if _, found := elemCount[item]; found {
			intersection = append(intersection, item)
			// Optional: remove the item if you do not want duplicates
			delete(elemCount, item)
		}
	}

	return intersection
}
func IntersectMap(map1, map2 map[MatrixNode]bool) []MatrixNode {
	var intersection []MatrixNode

	// Loop over the first map and check if the node is also `true` in the second map
	for node, value1 := range map1 {
		if value1 { // Check if the value is true in the first map
			if value2, found := map2[node]; found && value2 {
				intersection = append(intersection, node)
				// Optionally, remove the item from the second map to prevent duplicates
				// delete(map2, node)
			}
		}
	}

	return intersection
}
func IsOutOfBounds(pos Coordinates, gridSize *GridSize) bool {

	if Min(pos.R, pos.C) < 0 ||
		pos.R >= gridSize.Rows || pos.C >= gridSize.Cols {
		return true
	}

	return false
}
func Abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
