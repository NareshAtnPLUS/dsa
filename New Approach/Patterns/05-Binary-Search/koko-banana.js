/**
 * the core problem is to find the minimum optimal eating speed for koko
 * to eat bananas in the piles
 *
 * our fastest way to eat banana is the max of the piles
 * slowest way to eat banana is 1
 *
 * so our lower and upper bounds are 1 and max of piles of bananas
 *
 * the condition here is to eat within h hours
 *
 * use binary search to compute the minEatingSpeed
 *
 * for every iteration in the binary search,
 * compute the timetaken in hours to eat all the piles of bananas
 *
 * if the timetaken is less than the target, then find and store the min eating speed
 * and update the right to find further minimum eating speed
 * else
 * update the left to _minEatingSpeed + 1 since our minimum eating speed is low
 * to complete eating of bananas within the time
 *
 * finally return the computed minEatingSpeed
 * @param {number[]} piles
 * @param {number} h
 */
const minEatingSpeed = (piles, h) => {
    /**
     *
     * @param {number} left
     * @param {number} right
     * @returns
     */
    const findMid = (left, right) => Math.trunc((left + right) / 2);
    // initally setting the eating speed to be max of the piles of banana
    let eatingSpeed = Math.max(...piles);
    // setting initial values of left and right to be 1 and max piles of banana
    let [left, right] = [1, eatingSpeed];

    while (left <= right) {
        const _minEatingSpeed = findMid(left, right);
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / _minEatingSpeed);
        }
        if (hours <= h) {
            eatingSpeed = Math.min(eatingSpeed, _minEatingSpeed);
            // finding even smaller eating speed
            right = _minEatingSpeed - 1;
        } else {
            left = _minEatingSpeed + 1;
        }
    }
    return eatingSpeed;
};
