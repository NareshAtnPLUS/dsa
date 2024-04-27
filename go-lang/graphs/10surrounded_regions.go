package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

func CaptureSurroundedRegions(board [][]string) [][]string {
	gridSize := &utils.GridSize{
		Rows: len(board),
		Cols: len(board[0]),
	}
	/*
		Doing dfs on the border nodes because whatever Os region which are connected
		to the borders, are not fully surrounded.
		That's the reason we are doing dfs and converting all the Os
		which are connected to the borders Os.
	*/
	for idx, row := range board {
		for jdx := range row {
			if board[idx][jdx] == "O" &&
				((idx == 0 || idx == gridSize.Rows-1) || (jdx == 0 || jdx == gridSize.Cols-1)) {
				dfsCapture(idx, jdx, gridSize, &board)
			}
		}
	}
	fmt.Println("Board after captuing the borders")
	fmt.Println(board)
	for idx, row := range board {
		for jdx := range row {
			if board[idx][jdx] == "O" {
				board[idx][jdx] = "X"
			}
		}
	}
	fmt.Println("Board after converting the surrounded regions 0 into X")
	fmt.Println(board)
	for idx, row := range board {
		for jdx := range row {
			if board[idx][jdx] == "T" {
				board[idx][jdx] = "O"
			}
		}
	}
	fmt.Println("Board after converting the border regions T into 0")
	fmt.Println(board)
	return board
}

/*
This function is capable of capturing the nodes
*/
func dfsCapture(r, c int, gridSize *utils.GridSize, board *[][]string) {
	if utils.Min(r, c) < 0 ||
		c == gridSize.Cols ||
		r == gridSize.Rows ||
		(*board)[r][c] != "O" {
		return
	}
	(*board)[r][c] = "T"
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		dfsCapture(r+dr, c+dc, gridSize, board)
	}
}
