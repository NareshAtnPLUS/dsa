let START_INDEX = 0;
const isIntersected = (fast, slow) => fast === slow;
/**
 *
 * @param {numberp[]} nums
 * @returns {number}
 */
const findDuplicate = (nums) => {
    if (!nums.length) {
        return -1;
    }
    let [slow1, slow2] = moveFast(nums);
    [slow1, slow2] = moveSlow(nums, slow1, slow2);
    return slow1;
};
const moveFast = (nums) => {
    let [slow, fast] = [nums[START_INDEX], nums[nums[START_INDEX]]];

    while (!isIntersected(slow, fast)) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    // reseting the fast pointer to act as a slow pointer in the next iteration
    fast = START_INDEX;
    return [slow, fast];
};
const moveSlow = (nums, slow1, slow2) => {
    while (!isIntersected(slow1, slow2)) {
        slow1 = nums[slow1];
        slow2 = nums[slow2];
    }
    return [slow1, slow2];
};
