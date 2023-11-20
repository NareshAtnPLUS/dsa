/**
 * this problem can be solved by two pointer technique.
 * intialize left and right pointer.
 * initialize leftMax and rightMax to the correspoding heights
 * for every iteration
 * check if leftMax is less than rightMax
 * if it is then
 *  increament the left pointer
 *  compute the numUnits of water we can store with
 *  the leftMax and current left height
 * else
 *  decreament the right pointer
 *  compute the num units of water we can store with
 *  the rightMax and the current right height
 *
 *
 * NOTE: Since we are using the condition leftMax is less than rightMax,
 * it doesn't matter how high the right heigth is our bottle neck will always be left
 * we are only cared about the leftMax and current height
 * when we are computing num of water units stored
 * because it doesn't matter how high the right pointer is,
 * we can only store leftMax height water at maximum
 *
 * Similarly, when rightMax is less than leftMax
 * we are cared only about the rightMax and the current height
 * because it doesn't matter how high the left pointer is,
 * our bottle neck will always will be right height
 * we can only store rightMax height water at maximum
 *
 * TRICK: the trick for computing units of water without
 * getting negative numbers is to update the max nums before computing,
 * this will make the value to 0
 * @param {number[]} heights
 */
const trap = (heights) => {
    if (!heights || heights.length === 0) {
        return 0;
    }
    let [left, right] = [0, heights.length - 1];
    let [leftMax, rightMax] = [heights[left], heights[right]];
    let result = 0;

    while (left < right) {
        // update and compute the smaller max value; right max is smaller decreament the right and compute in the right part
        // if left max is smaller compute in  the left part
        // since we are using this condition; we know that current leftmax is the minimum
        // during the iteration
        if (leftMax < rightMax) {
            /**
             * shift the left pointer, update leftMax,
             * to compute units of water stored in that area
             */
            left++;
            leftMax = Math.max(leftMax, heights[left]);
            const numUnitsOfWater = leftMax - heights[left];
            result += numUnitsOfWater;
        } else {
            /**
             * shift right pointer, update rightMax,
             * to compute units of water stored in that area
             */
            right--;
            rightMax = Math.max(rightMax, heights[right]);
            const numUnitsOfWater = rightMax - heights[right];
            result += numUnitsOfWater;
        }
    }
    return result;
};
/**
 * Trapping rain water problem solving notes
 * for every single window,
 * we will have to take the minimum of the two pointers
 *
 */
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
