package arrayhashing

import (
	"fmt"
	"strconv"
)

func createHashKey(typ, val, pos string) string {
	return val + "|" + typ + "|" + pos
}
func IsValidSuduko(board [][]string) bool {
	// creating some constants that will be useful in the following algorithm
	const SUBGRID_ROW, SUBGRID_COL = 3, 3
	/*
		this seen array keep tracks of values with coordinates of their type
		for example: it stores the key of value|type|position of the type
		this helps us to keep track and check if the value if already found in the row|col|subgrid
	*/
	seen := make(map[string]bool)

	for row := 0; row < 9; row++ {
		for col := 0; col < 9; col++ {
			value := board[row][col]
			subgrid := strconv.Itoa(row/SUBGRID_ROW) + "-" + strconv.Itoa(col/SUBGRID_COL)

			if value == "." {
				continue
			}
			rowKey := createHashKey("row", value, strconv.Itoa(row))
			colKey := createHashKey("col", value, strconv.Itoa(col))
			subgridKey := createHashKey("grid", value, subgrid)
			/*
				we are creating val|type|position as our hashkey
				to keep track of the elements.
				we are checking if the values are already present.
					- if it is already present, then it's a repetition. we return false
				if this condition pases till the end of the array, then we don't have
				a repetition  in row, col or subgrid, we return true at the end of the loop.
			*/
			_, foundInRow := seen[rowKey]
			_, foundInCol := seen[colKey]
			_, foundInSubGrid := seen[subgridKey]

			if foundInCol || foundInRow || foundInSubGrid {
				return false
			} else {
				seen[rowKey] = true
				seen[colKey] = true
				seen[subgridKey] = true
			}
		}
	}
	fmt.Println(seen)
	return true
}
