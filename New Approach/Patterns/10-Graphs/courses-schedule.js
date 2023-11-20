const canFinish = (numCourses, prerequisites) => {
    const prerequisitesMap = new Map(),
        visited = new Set();

    for (let [course, prerequisite] of prerequisites) {
        if (!prerequisitesMap.has(course)) {
            prerequisitesMap.set(course, []);
        }
        const prerequisites = [...prerequisitesMap.get(course), prerequisite];
        prerequisitesMap.set(course, prerequisites);
    }
    const dfs = (crs) => {
        if (visited.has(crs)) {
            return false;
        }
        const prerequisites = prerequisitesMap.get(crs) || [];
        if (prerequisites.length === 0) {
            return true;
        }
        // if both of the above base cases are satisfied we are
        // going to visit the branching cases
        visited.add(crs);
        for (let pre of prerequisites) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visited.delete(crs);
        prerequisitesMap.set(crs, []);
        return true;
    };
    for (let crs = 0; crs < numCourses; crs++) {
        if (!dfs(crs)) {
            return false;
        }
    }
    return true;
};
console.log(canFinish(2, [[1, 0]]));
