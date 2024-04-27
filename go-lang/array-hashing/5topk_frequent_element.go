package arrayhashing

import fmt "fmt"

func TopKFrequentElements(nums []int, k int) []int {
	freqMap := make(map[int]int)
	countSlice := make([][]int, len(nums)+1)

	//  Step 1 computing frequency map
	for _, num := range nums {
		if _, ok := freqMap[num]; ok {
			freqMap[num] += 1
		} else {
			freqMap[num] = 1
		}
	}
	fmt.Printf("\nfreq-map: %v", freqMap)
	// Step 2 converting freq map into array
	for num, count := range freqMap {
		countSlice[count] = append(countSlice[count], num)
	}
	fmt.Printf("\ncount-slice: %v", countSlice)
	res := make([]int, 0)
	// Step 3 computing the final result of top k frequent element
	for i := len(countSlice) - 1; i > 0; i-- {
		res = append(res, countSlice[i]...)
		fmt.Println(res)
		if len(res) == k {
			fmt.Printf("res: %v", res)
			return res
		}
	}
	fmt.Printf("res: %v", res)
	return res
}
