/**
 * if the input array is sorted then we can solve this problem by
 * Using left and right pointers
 * compute currentSum at every iteration,
 * which is the sum of numbers of left and right pointers.
 * when the currentSum is greater than target
 * then decreament the left pointer
 * when the currentSum is lesser than the target
 * then increament the left pointer
 * return the left and right pointers when the currentSum is equal
 * to the target
 * @param {Array} numbers
 * @param {number} target
 */
const twoSum = function (numbers, target) {
    const [left, right] = [0, numbers.length - 1];
    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        if (currentSum > target) {
            right -= 1;
        } else if (currentSum < target) {
            left += 1;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [];
};
