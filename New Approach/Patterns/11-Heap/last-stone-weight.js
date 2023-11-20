const { MaxPriorityQueue } = require('datastructures-js');

/**
 *
 * @param {number[]} stones
 */
const lastStoneWeight = (stones) => {
    const maxWeightHeap = new MaxPriorityQueue();
    stones.forEach((weight) => maxWeightHeap.enqueue(weight));
    while (maxWeightHeap.size() > 1) {
        const [a, b] = [maxWeightHeap.pop(), maxWeightHeap.pop()];
        const result = a - b;
        console.log(result);
        maxWeightHeap.enqueue(result);
    }
    maxWeightHeap.enqueue(0);
    return maxWeightHeap.dequeue();
};

console.log(lastStoneWeight([1]));
