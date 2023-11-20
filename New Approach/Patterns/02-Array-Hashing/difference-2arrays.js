/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const [result1, result2] = [[], []];
    const computeFrequency = (arr, frequencyMap = {}) => {
        for (let num of arr) {
            if (!(num in frequencyMap)) {
                frequencyMap[num] = 0;
            }
            frequencyMap[num] += 1;
        }
        return frequencyMap;
    };
    let frequencyMap = computeFrequency(nums1);
    frequencyMap = computeFrequency(nums2, frequencyMap);
    for (let num in frequencyMap) {
        const frequency = frequencyMap[num];
        num = parseInt(num);
        if (frequency === 1) {
            if (nums1.includes(num)) {
                result1.push(num);
            } else if (nums2.includes(num)) {
                result2.push(num);
            }
        }
    }
    return [result1, result2];
};
console.log(findDifference([1, 2, 3], [2, 4, 6]));
