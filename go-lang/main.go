package main

import (
	oneDimDp "data-structures/dsa-practice/1_dim_dp"
	fmt "fmt"
	time "time"
)

/*
iim
*/
func main() {
	start := time.Now()
	fmt.Println("Data structures in go lang")
	// n := 5
	// fibonnaciVal := oneDimDp.Fibonacci(n)
	// fmt.Printf("Fibonacci val of %d: %d", n, fibonnaciVal)

	cost := []int{1, 100, 1, 1, 1, 100, 1, 1, 100, 1}
	minCostClimbingStairs := oneDimDp.MinCostClimbingStairs(cost)
	fmt.Printf("Min Cost of climbing stairs is:%d", minCostClimbingStairs)
	duration := time.Since(start)
	fmt.Printf("\nExecution time: %v", duration)
	fmt.Println("Naresh Kumar")
}
