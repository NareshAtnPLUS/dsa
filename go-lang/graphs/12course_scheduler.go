package graphs

func CourseScheduler(numCourses int, prerequisites [][]int) bool {
	// this is a adjacency list that holds the list of prerequisites for
	// every course
	prerequisitesMap := make(map[int][]int, 0)

	for _, prereq := range prerequisites {
		crs, pre := prereq[0], prereq[1]
		prerequisitesMap[crs] = append(prerequisitesMap[crs], pre)
	}

	visited := make(map[int]bool)
	for course := 0; course < numCourses; course++ {
		if !dfsCourseScheduler(&course, &prerequisitesMap, &visited) {
			return false
		}
	}
	return true

}

func dfsCourseScheduler(course *int, prerequisitesMap *map[int][]int, visited *map[int]bool) bool {
	/*
		base cases
			1. if the course is visited already in the dfs call, then we
			are in cycle return fasle. since the course cannot be completed
	*/
	if (*visited)[*course] {
		return false
	}
	/*
		2. if the course does not have any prerequisites then we can complete the course
		return true
	*/
	if len((*prerequisitesMap)[*course]) == 0 {
		return true
	}

	(*visited)[*course] = true

	for _, prerequisite := range (*prerequisitesMap)[*course] {
		if !dfsCourseScheduler(&prerequisite, prerequisitesMap, visited) {
			return false
		}
	}

	delete(*visited, *course)

	(*prerequisitesMap)[*course] = []int{}

	return true
}

const CAN_FINISH = true
const CANNOT_FINISH = false

func CourseSchedulerV2(numCourses int, prerequisites [][]int) bool {
	crsPrereqMap := make(map[int][]int)

	for _, prerequisite := range prerequisites {
		crs, prereq := prerequisite[0], prerequisite[1]
		crsPrereqMap[crs] = append(crsPrereqMap[crs], prereq)
	}
	visited := make(map[int]bool)

	for crs := range crsPrereqMap {
		if !topologicalSortCourses(&crs, &crsPrereqMap, &visited) {
			return CANNOT_FINISH
		}
	}
	return CAN_FINISH
}
func topologicalSortCourses(course *int, crsPrereqMap *map[int][]int, visited *map[int]bool) bool {

	if (*visited)[*course] {
		return CANNOT_FINISH
	}

	if len((*crsPrereqMap)[*course]) == 0 {
		return CAN_FINISH
	}

	(*visited)[*course] = true
	prerequisites := (*crsPrereqMap)[*course]
	for _, prerequisite := range prerequisites {
		if !topologicalSortCourses(&prerequisite, crsPrereqMap, visited) {
			return CANNOT_FINISH
		}
	}
	delete(*visited, *course)

	(*crsPrereqMap)[*course] = []int{}
	return CAN_FINISH
}
