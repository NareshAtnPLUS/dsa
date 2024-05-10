package main

import (
	"data-structures/dsa-practice/graphs"
	fmt "fmt"
	time "time"
)

/*
iim
*/
func main() {
	start := time.Now()
	fmt.Println("Data structures in go lang")
	// data := []int{1, 2, 3, 1}
	// englishBinary := map[bool]string{true: " ", false: " does not "}
	// itContains := arrayhashing.ContainsDuplicate(data)
	// fmt.Printf("It%vcontain duplicate", englishBinary[itContains])

	// isValidAnagram := arrayhashing.ValidAnagramV2("anagram", "nagaram")
	// fmt.Printf("\n Valid Anagram: %v", isValidAnagram)

	// twoSumResult := arrayhashing.TwoSum([]int{2, 3, 6, 7}, 9)
	// fmt.Println(twoSumResult)
	// groupedAnagram := arrayhashing.GroupAnagram([]string{"eat", "tea", "tan", "ate", "nat", "bat"})
	// fmt.Println(groupedAnagram)

	// topKFreq := arrayhashing.TopKFrequentElements([]int{1, 1, 1, 2, 2, 3}, 2)
	// fmt.Println(topKFreq)

	// productExecptSelf := arrayhashing.ProductExceptSelf([]int{1, 2, 3, 4})
	// fmt.Println(productExecptSelf)

	// isValid := arrayhashing.IsValidSuduko([][]string{
	// 	{".", ".", "4", ".", ".", ".", "6", "3", "."},
	// 	{".", ".", ".", ".", ".", ".", ".", ".", "."},
	// 	{"5", ".", ".", ".", ".", ".", ".", "9", "."},
	// 	{".", ".", ".", "5", "6", ".", ".", ".", "."},
	// 	{"4", ".", "3", ".", ".", ".", ".", ".", "1"},
	// 	{".", ".", ".", "7", ".", ".", ".", ".", "."},
	// 	{".", ".", ".", "5", ".", ".", ".", ".", "."},
	// 	{".", ".", ".", ".", ".", ".", ".", ".", "."},
	// 	{".", ".", ".", ".", ".", ".", ".", ".", "."},
	// })

	// fmt.Printf("\n Is the sudoku valid: %v", isValid)

	// longestSequence := arrayhashing.LongestConsecutive([]int{0, 3, 7, 2, "E", 8, 4, 6, 0, 1})
	// fmt.Println("\n", longestSequence)
	// grid := [][]int{
	// 	{0, 0, 0, 0},
	// 	{1, 1, 0, 0},
	// 	{0, 0, 0, 1},
	// 	{0, 1, 0, 0},
	// }
	// numWays := graphs.UniquePaths(grid)
	// fmt.Println("numWays:", numWays)
	// shortestPath := graphs.ShortestPathV2(grid)
	// fmt.Printf("\nshortestPath:%d", shortestPath)

	// graph := graphs.CreateAdjacencyList([][]string{{"A", "B"}, {"C", "E"}, {"B", "C"}, {"B", "E"}, {"E", "D"}})
	// numWays := graphs.AdjacencyListDFS(graph, "E")
	// shortestDistance := graphs.AdjacencyListBFS(graph, "A", "E")
	// fmt.Printf("\n Num ways to reach E: %d", numWays)
	// fmt.Printf("\n Shortest Distance to reach E from A: %d", shortestDistance)

	heights := [][]int{
		{1, 2, 2, 3, 5},
		{3, 2, 3, 4, 4},
		{2, 4, 5, 3, 1},
		{6, 7, 1, 4, 5},
		{5, 1, 1, 2, 4},
	}
	// board := [][]string{
	// 	{"X", "X", "X", "X"},
	// 	{"X", "O", "O", "X"},
	// 	{"X", "X", "O", "X"},
	// 	{"X", "O", "X", "X"},
	// }
	// fmt.Println(board)

	// numIsland := graphs.NumIsland(matrix)
	// fmt.Printf("\nNum of island in the above grid: %d", numIsland)

	// maxAreaIsland := graphs.MaxAreaIsland(matrix)
	// fmt.Printf("\n max area of the islands in the grid %v is\n: %d", matrix, maxAreaIsland)

	pacificAndAtlantic := graphs.PacificAtlantic(heights)
	// surroundedRegions := graphs.CaptureSurroundedRegions(board)
	// fmt.Println("Surrounded Regions:", surroundedRegions)
	fmt.Printf("\n The nodes from which water can reach pacific and atlantic ocean are: \n %v", pacificAndAtlantic)

	// matrix := [][]int{
	// 	{2, 1, 1},
	// 	{1, 1, 0},
	// 	{0, 1, 1},
	// }
	// prerequisites := [][]int{
	// 	{3, 2},
	// 	{1, 3}, {0, 1}, {0, 2},
	// 	{4, 0}, {5, 0},
	// }
	// edges := [][]int{
	// 	{1, 2},
	// 	{2, 3},
	// 	{3, 4},
	// 	{1, 4},
	// 	{1, 5},
	// }
	// timeTaken := graphs.RottingOranges(matrix)
	// fmt.Printf("\n Time taken to rot all the oranges: %d", timeTaken)

	// canFinsih := graphs.CourseScheduler2(6, prerequisites)
	// fmt.Printf("Can someone finish this courses:%v", canFinsih)

	// redundantConnection := graphs.FindRedundantConnection(edges)
	// fmt.Printf("The rendundant connection is %v", redundantConnection)

	// ladderLength := graphs.LadderLength("hit", "cog", []string{"hot", "dot", "dog", "lot", "log", "cog"})
	// fmt.Printf("\nThe word ladder length:%d", ladderLength)
	// edges := []utils.Edge{
	// 	{"Basavangudi", "Lalbagh", 10}, // visually shorter, but traffic cost is higher,
	// 	{"Basavangudi", "Jayanagar", 3},

	// 	{"Jayanagar", "Lalbagh", 4},
	// 	{"Lalbagh", "Koramangala", 2},
	// 	{"Jayanagar", "Koramangala", 8},
	// 	{"Jayanagar", "BTM", 2},
	// 	{"Koramangala", "BTM", 5},
	// }
	// n := 5
	// src := "Basavangudi"
	// shortestPaths, prev := graphs.DijkstrasShortestPathPro(edges, n, src)
	// path := graphs.ReconstructPath(src, "Koramangala", prev)
	// fmt.Println("Shortest path to D:", path)
	// fmt.Println("Shortest distances:", shortestPaths, prev)
	// graphs.DrawPath(path)
	// data := [][]int{
	// 	{0, 1, 100},
	// 	{1, 2, 100},
	// 	{2, 0, 100},
	// 	{1, 3, 600},
	// 	{2, 3, 200},
	// }
	// shortestTime := graphs.FindCheapestPrice(4, data, 0, 3, 1)
	// fmt.Printf("\nThe shortest cost to reach 3 from 0 is %d", shortestTime)

	// edges := []utils.EdgeInt{
	// 	{1, 2, 10},
	// 	{1, 3, 8},
	// 	{2, 3, 4},
	// 	{2, 4, 4},
	// 	{3, 4, 4},
	// 	{3, 5, 4},
	// 	{4, 5, 2},
	// }
	// nodeCount := 5
	// // mst := graphs.CreateMinimumSpanningTree(edges, nodeCount, 1)
	// mst := graphs.KruskalsAlgorithmWithMinHeap(edges, nodeCount)
	// for _, edge := range mst {
	// 	fmt.Printf("%d - %d\n", edge.Src, edge.Dst)
	// }
	duration := time.Since(start)
	fmt.Printf("\nExecution time: %v", duration)
	fmt.Println("Naresh Kumar")
}
