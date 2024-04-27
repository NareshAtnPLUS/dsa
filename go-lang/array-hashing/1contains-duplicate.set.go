package arrayhashing

/*
contains duplicate.

task is to detect duplicate in the array.

using the map datastructure in go lang
we can achieve this by setting the seen number in the array to true

if we are seeing the number again then we can return true, because it contains
duplicate.

finally we return false, since we didnot encounter duplicate


time and space complexity analysis for this algorithm

since we are looping through the entire array at once its O(N)
space complexity analysis we are keeping an item for every item in the list in the worst case
so its space complexity is O(N)

*/
func ContainsDuplicate(nums []int) bool {
	uniqueNums := make(map[int]bool)
	for _, num := range nums {
		// comma ok idiom of the go lang
		if _, ok := uniqueNums[num]; ok {
			return true
		} else {
			uniqueNums[num] = true
		}
	}
	return false
}
