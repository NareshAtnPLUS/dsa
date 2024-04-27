package arrayhashing

import "fmt"

func TwoSum(nums []int, target int) []int {
	numIndexMap := make(map[int]int)

	for idx, num := range nums {
		diff := target - num
		prevIdx, ok := numIndexMap[diff]
		fmt.Println(prevIdx, ok)

		if ok {
			return []int{prevIdx, idx}
		}
		numIndexMap[num] = idx
	}
	return nil
}
