/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const numFrequencyMap = {},
        bucket = Array.from({ length: nums.length + 1 }, () => []);
    for (let num of nums) {
        if (!(String(num) in numFrequencyMap)) {
            numFrequencyMap[num] = 0;
        }
        numFrequencyMap[num] += 1;
    }
    for (let num in numFrequencyMap) {
        const count = numFrequencyMap[num];
        bucket[count].push(num);
    }
    const result = [];
    for (let count = bucket.length - 1; count > -1; count--) {
        const groupedNums = bucket[count];
        if (groupedNums.length > 0) {
            for (let num of groupedNums) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
