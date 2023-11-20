/**
 * the descrete cases we have to understand is that
 * when target === nums[mid] return the mid
 *
 * Consider the array [ 4, 5, 6, 7, 0, 1, 2]
 * Case 1 consider target as 7
 * here we can simply conclude that our target is greater than the middle
 * so check in the right portion of the array; left = mid + 1
 *
 * Case 2 consider target as 4
 * in this case, we have two splitted smaller values for target less than guess
 * so we have to add the key condition, of
 * if the target is less than guess or target is greater than right most value
 * then we have to check in the left part of the sorted array; update
 * right = mid-1
 *
 * case 3 consider target as 1
 * in this case we have two splitted smaller values for target less than guess
 *
 * @param {number[]} nums
 * @param {number} target
 */
const search = (nums, target) => {
    const findMid = (left, right) => Math.trunc((left + right) / 2);

    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = findMid(left, right);
        const guess = nums[mid];
        const leftNum = nums[left];
        const rightNum = nums[right];

        if (target === guess) {
            return mid;
        }

        const isLeftPortion = leftNum <= guess;
        if (isLeftPortion) {
            /**
             * if we are in the left portion of the array,
             * if our target is greater than mid number, or
             * if our target is lesser than the left most number
             * in these above cases we have to search in the right portion
             * to the mid.
             */
            if (target > guess || target < leftNum) {
                left = mid + 1;
            } else {
                /**
                 * if  we are in the left portion of the array,
                 * if our target is lesser than or equal to the mid number
                 * and if our target is greater than the left number
                 * then we have to search in the left portion to the mid
                 */
                right = mid - 1;
            }
        } else {
            /**
             * if we are in the right portion of the array
             * if our target is lesser mid number or
             * if it is greater than the rightmost number.
             * then we have to search in the left portion to the mid
             */
            if (target < guess || target > rightNum) {
                right = mid - 1;
            } else {
                /**
                 * if our target is greater than or equal to the mid number
                 * and if our target is lesser than the right most number
                 * then we have to search in the right portion to the mid.
                 */
                left = mid + 1;
            }
        }
    }
    return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2, 3], 0));
