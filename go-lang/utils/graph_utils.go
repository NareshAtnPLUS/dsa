package utils

type Coordinates struct {
	R int
	C int
}
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
