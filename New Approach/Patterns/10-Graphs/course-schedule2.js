/**
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @returns {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
    const prereqMap = new Map(
            Array.from({ length: numCourses }, () => []).map((val, crs) => [
                crs,
                val,
            ])
        ),
        visited = new Set(),
        cycle = new Set(),
        output = [];
    for (let [crs, pre] of prerequisites) {
        // updating prerequisites map with the given prerequisites
        const prereq = prereqMap.get(crs);
        prereqMap.set(crs, [...prereq, pre]);
    }
    /**
     * a course has 3 possible states
     * 1. visited => course added to the output
     * 2. visiting => course not added to the output, but added to cyle
     * 3. unvisited => course not added to output or cycle.
     */

    const dfs = (crs) => {
        if (cycle.has(crs)) {
            return false;
        }
        if (visited.has(crs)) {
            return true;
        }
        cycle.add(crs);
        const prerequisites = prereqMap.get(crs);
        for (let pre of prerequisites) {
            if (!dfs(pre)) {
                // we encountered cycle
                return false;
            }
        }
        // we are removing the crs from the cycle because its no longer
        // along the path that we are going
        cycle.delete(crs);
        // we have to add it to visit because we just went through this crs
        // and we went through all its prerequisites
        visited.add(crs);
        // build the output after all the positive conditions of the course
        // and its prerequisites
        output.push(crs);
        return true;
    };
    for (let course = 0; course < numCourses; course++) {
        if (!dfs(course)) {
            // we detected a cycle we are returning empty list
            // because its not possible to take the courses
            return [];
        }
    }
    return output;
};
