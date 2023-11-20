const { Heap } = require('datastructures-js');

const kthClosest = (points, k) => {
    const compareDistance = (a, b) => (a.distance < b.distance ? -1 : 1);
    const result = [];
    const distanceInfo = [];
    const computeEculidianDistance = (pointA, pointB = [0, 0]) => {
        const [[x1, y1], [x2, y2]] = [pointA, pointB];
        const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        return distance;
    };
    for (let pointA of points) {
        const distance = computeEculidianDistance(pointA);
        distanceInfo.push({ distance, point: pointA });
    }
    const distanceHeap = Heap.heapify(distanceInfo, compareDistance);
    for (let idx = 0; idx < k; idx++) {
        const { point } = distanceHeap.pop();
        result.unshift(point);
    }
    return result;
};
console.log(
    kthClosest(
        [
            [3, 3],
            [5, -1],
            [-2, 4],
        ],
        2
    )
);
