/**
 *
 * @param {string} source
 * @param {string} target
 */
const findAnagrams = function (source, target) {
    const compareHashMap = (source, target) => {
        const targetKeys = Object.keys(target);
        if (targetKeys.length === Object.keys(source).length) {
            for (let key of targetKeys) {
                if (source[key] !== target[key]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    if (target.length > source.length) {
        return [];
    }
    const targetCharCountMap = {};
    const sourceCharCountMap = {};
    for (let index = 0; index < target.length; index++) {
        const targetChar = target[index];
        const sourceChar = source[index];
        const prevTargetCount =
            targetChar in targetCharCountMap
                ? targetCharCountMap[targetChar]
                : 0;
        const prevSourceCount =
            sourceChar in sourceCharCountMap
                ? sourceCharCountMap[sourceChar]
                : 0;
        targetCharCountMap[targetChar] = 1 + prevTargetCount;
        sourceCharCountMap[sourceChar] = 1 + prevSourceCount;
    }
    let result,
        windowStart = 0;
    result = compareHashMap(sourceCharCountMap, targetCharCountMap) ? [0] : [];
    for (
        let windowEnd = target.length;
        windowEnd < source.length;
        windowEnd++
    ) {
        const leftChar = source[windowStart];
        const rightChar = source[windowEnd];
        const windowString = source.slice(windowStart, windowEnd);
        sourceCharCountMap[rightChar] =
            rightChar in sourceCharCountMap
                ? sourceCharCountMap[rightChar] + 1
                : 1;
        sourceCharCountMap[leftChar] = sourceCharCountMap[leftChar] - 1;
        if (sourceCharCountMap[leftChar] === 0) {
            delete sourceCharCountMap[leftChar];
        }
        windowStart += 1;
        if (compareHashMap(sourceCharCountMap, targetCharCountMap)) {
            result.push(windowStart);
        }
    }
    return result;
};
console.log(findAnagrams('cbaebabacd', 'abc'));
