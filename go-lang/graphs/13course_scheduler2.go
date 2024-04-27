package graphs

import "fmt"

func CourseScheduler2(numCourses int, prerequisites [][]int) []int {
	prereqGraph := make(map[int][]int)

	/**
	1. create a adjacency list for the prerequisites
	*/
	for _, prereq := range prerequisites {
		crs, pre := prereq[0], prereq[1]
		prereqGraph[crs] = append(prereqGraph[crs], pre)
	}
	// use the map data structures for the utility purposes. for memoization purposes, optimizing the algorithm
	allowedToTakeCourses := make(map[int]bool)
	cycleFlags := make(map[int]bool)
	// initialize the output array.
	topoSortedCourses := make([]int, 0)

	for course := 0; course < numCourses; course++ {
		fmt.Println("Executing dfs for ", course)
		if !dfsCourseScheduler2(course, &cycleFlags, &allowedToTakeCourses, &prereqGraph, &topoSortedCourses) {
			return []int{}
		}
	}
	return topoSortedCourses

}

func dfsCourseScheduler2(crs int, cycleFlags, allowedToTakeCourses *map[int]bool, prereqGraph *map[int][]int, topoSortedCourses *[]int) bool {
	if (*cycleFlags)[crs] {
		return false
	}

	if (*allowedToTakeCourses)[crs] {
		return true
	}

	(*cycleFlags)[crs] = true
	// if the crs does not have any prereq it wont execute the loop
	// it will go to the final part of the dfs function.
	for _, prereq := range (*prereqGraph)[crs] {
		if !dfsCourseScheduler2(prereq, cycleFlags, allowedToTakeCourses, prereqGraph, topoSortedCourses) {
			return false
		}
	}

	delete(*cycleFlags, crs)
	(*allowedToTakeCourses)[crs] = true
	(*topoSortedCourses) = append((*topoSortedCourses), crs)
	fmt.Println(topoSortedCourses, crs)
	return true
}
