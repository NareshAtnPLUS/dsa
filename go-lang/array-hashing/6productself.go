package arrayhashing

func ProductExceptSelf(nums []int) []int {
	res := make([]int, len(nums))
	prefix, postfix := 1, 1

	for idx := range nums {
		res[idx] = prefix
		prefix *= nums[idx]
	}
	for idx := len(nums) - 1; idx > -1; idx-- {
		res[idx] *= postfix
		postfix *= nums[idx]
	}
	return res
}
