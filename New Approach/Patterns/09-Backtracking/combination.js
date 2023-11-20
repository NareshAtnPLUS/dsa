/**
 *
 * @param {Array} candidates
 * @param {*} target
 */
const combinations2 = (candidates, target) => {
    const result = [];
    /**
     *
     * @param {Array} curr_combination
     * @param {number} idx
     * @param {number} curr_target
     * @returns
     */
    const backtrack = (curr_combination, start_pos, curr_target) => {
        if (curr_target === 0) {
            result.push(Array.from(curr_combination));
        }
        if (curr_target <= 0) {
            return;
        }
        let prev = null;
        for (let idx = start_pos; idx < candidates.length; idx++) {
            const candidate = candidates[idx];
            if (candidate === prev) {
                continue;
            }
            // push the current candidate at every iteration of the loop
            curr_combination.push(candidates[idx]);
            // then use the curr_combinations to backtrack
            backtrack(curr_combination, idx + 1, target - candidate);
            // remove the element before moving on to the next iteration
            curr_combination.pop();
            prev = candidate;
        }
    };
    backtrack([], 0, target);
    return result;
};
