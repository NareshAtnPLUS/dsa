package graphs

import (
	"data-structures/dsa-practice/utils"
	"fmt"
)

const O = "O"
const X = "X"
const TEMP = "T"

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

func dfsCaptureV2(pos utils.Coordinates, gridSize *utils.GridSize, board *[][]string) {
	if utils.IsOutOfBounds(pos, gridSize) || (*board)[pos.R][pos.C] != O {
		return
	}
	(*board)[pos.R][pos.C] = TEMP
	for _, dir := range utils.Directions {
		dr, dc := dir[0], dir[1]
		nextPos := utils.Coordinates{R: pos.R + dr, C: pos.C + dc}
		dfsCaptureV2(nextPos, gridSize, board)
	}
}
func CaptureSurroundedRegionsV2(board [][]string) [][]string {
	gridSize := &utils.GridSize{
		Rows: len(board),
		Cols: len(board[0]),
	}
	// converting perimeter 0s to temporary character
	for r, row := range board {
		for c := range row {
			pos := &utils.Coordinates{R: r, C: c}
			if board[r][c] == O && isPerimeterCell(pos, gridSize) {
				dfsCaptureV2(*pos, gridSize, &board)
			}
		}
	}

	// capturing 4 bounded 0s to X
	updateBoard(O, X, &board)

	// reverting Ts to 0s
	updateBoard(TEMP, O, &board)

	return board
}
func isPerimeterCell(pos *utils.Coordinates, gridSize *utils.GridSize) bool {
	if (pos.R == 0 || pos.R == gridSize.Rows-1) || (pos.C == 0 || pos.C == gridSize.Cols-1) {
		return true
	}
	return false
}
func updateBoard(old, new string, board *[][]string) {
	for r, row := range *board {
		for c := range row {
			if (*board)[r][c] == old {
				(*board)[r][c] = new
			}
		}
	}
}
