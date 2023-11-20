/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    const result = [];
    const computeFrequency = (arr, frequencyMap = {}) => {
        for (let num of arr) {
            if (!(num in frequencyMap)) {
                frequencyMap[num] = 0;
            }
            frequencyMap[num] += 1;
        }
        return frequencyMap;
    };
    let frequencyMap = computeFrequency(arr1);
    frequencyMap = computeFrequency(arr2, frequencyMap);
    frequencyMap = computeFrequency(arr3, frequencyMap);
    for (let key in frequencyMap) {
        const frequency = frequencyMap[key];
        if (frequency > 2) {
            result.push(parseInt(key));
        }
    }
    return result;
};
console.log(
    arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8])
);
