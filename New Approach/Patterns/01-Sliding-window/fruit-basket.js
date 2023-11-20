const getMaxFruits = (fruitTrees) => {
    const DISTINCT_ALLOWED_FRUITS = 2;
    let windowStart = 0,
        maxFruits = 0;
    fruitsFrequency = {};
    for (let windowEnd = 0; windowEnd < fruitTrees.length; windowEnd++) {
        const rightFruit = fruitTrees[windowEnd];
        if (!(rightFruit in fruitsFrequency)) {
            fruitsFrequency[rightFruit] = 0;
        }
        fruitsFrequency[rightFruit] += 1;
        while (Object.keys(fruitsFrequency).length > DISTINCT_ALLOWED_FRUITS) {
            const leftFruit = fruitTrees[windowStart];
            fruitsFrequency[leftFruit] -= 1;
            if (fruitsFrequency[leftFruit] === 0) {
                delete fruitsFrequency[leftFruit];
            }
            windowStart += 1;
        }
        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    }
    return maxFruits;
};
console.log(getMaxFruits(['A', 'B', 'C', 'A', 'C']));
console.log(getMaxFruits(['A', 'B', 'C', 'B', 'B', 'C']));
console.log(getMaxFruits(['A', 'B', 'C', 'A', 'C']));
