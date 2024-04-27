package arrayhashing

import "fmt"

func LongestConsecutive(nums []int) int {
	numSet := make(map[int]bool)

	for _, num := range nums {
		numSet[num] = true
	}

	longestSequenceLength := 0

	for _, num := range nums {
		fmt.Print(num)
		/* skip if the current number has a previous number
		we are going to iterate the above for loop
		only for the numbers which does have previous numbers
		which means we are going to run the logic for the numbers
		which are the sequence starting numbers


		So if the number has the previous number it will not be
		the sequence starting numbers.
		we can cancel this iteration and go to
		the next iteration of the for loop.
		*/
		if numSet[num-1] {
			fmt.Print("continuing.")
			continue
		}
		/*
			for here onwards we can write logic for the
			sequence starting numbers
		*/
		currSequenceLength := 1 // becase we have passed the above condition, so we are having 1
		nextNum := num + 1      // this is also possible because the above condition is passed
		// continue the loop till you can run for the sequence of numbers
		fmt.Print("\n")
		for numSet[nextNum] {
			fmt.Printf("curr iteration: %d->%d\t", num, nextNum)
			currSequenceLength++
			nextNum++
		}
		fmt.Print("\n")
		fmt.Printf("currentSeqLength: %d\n", currSequenceLength)
		if currSequenceLength > longestSequenceLength {
			longestSequenceLength = currSequenceLength
		}
	}
	return longestSequenceLength
}
