/**
 * the car fleet groupings can be calculted by computing the time taken
 * for each car to reach the target.
 *
 * combine the speeds and postions into a array of objects
 * and sort them so that we can compute the time taken from the
 * fastest moving car to slowest moving car
 *
 * this helps us to find whether the cars collide or meet each other
 * using the computed time taken
 *
 * if the time taken by the current car is less than
 * the time taken by the previous car,
 * then these cars will meet and form a car fleet
 *
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 */
const carFleet = (target, positions, speeds) => {
    const carInfo = [];
    const timeTakenStack = [];
    /**
     *
     * @param {number[]} stack
     */
    const top = (stack) => stack.at(-1);
    for (let index = 0; index < positions.length; index++) {
        carInfo.push({
            position: positions[index],
            speed: speeds[index],
        });
    }
    carInfo.sort((a, b) => b.position - a.position);
    for (let info of carInfo) {
        const timeTaken = (target - info.position) / info.speed;
        timeTakenStack.push(timeTaken);
        /**
         * checking whether the time taken by the current car which we
         * pushed into the stack, is less than the time taken by the
         * previous car. if it is the case,
         * then we pop of the current car's time taken from the stack
         */
        if (
            timeTakenStack.length >= 2 &&
            top(timeTakenStack) <= timeTakenStack.at(-2)
        ) {
            timeTakenStack.pop();
        }
    }
    return timeTakenStack.length;
};
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
