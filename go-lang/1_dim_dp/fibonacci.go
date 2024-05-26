package oneDimDp

func Fibonacci(n int) int {
	// cache := make(map[int]int)
	// fibonacciVal := recursiveDP(n, &cache)
	fibonacciVal := iterativeDP(n)
	return fibonacciVal

}
func recursiveDP(n int, cache *map[int]int) int {
	// memoization comes at the top of the order of function execution
	if val, exists := (*cache)[n]; exists {
		return val
	}
	// base cases
	// if n == 0 {
	// 	return 0
	// }
	if n <= 1 {
		return 1
	}
	return recursiveDP(n-1, cache) + recursiveDP(n-2, cache)
}

type DP [2]int

const N_1 = 0
const N = 1

func iterativeDP(n int) int {
	if n < 2 {
		return n
	}
	dp := DP{0, 1}
	for idx := 2; idx <= n; idx++ {
		temp := dp[N]
		dp[N] = dp[N_1] + dp[N]
		dp[N_1] = temp
	}
	return dp[N]
}
