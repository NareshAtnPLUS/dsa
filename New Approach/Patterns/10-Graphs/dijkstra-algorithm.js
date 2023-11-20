const {
    MinHeap,
    MaxHeap,
    MinPriorityQueue,
    MaxPriorityQueue,
} = require('datastructures-js');

const dijkstra = () => {
    const arr = [84, 23, 54, 12];
    const carArr = [
        {
            engine: 'Mercedes',
            chasis: 'Mercedes',
            suspension: 'Mercedes',
            drag: 0.32,
            drs: 10,
            topSpeed: 328,
            downforce: 45,
        },
        {
            engine: 'RBPT',
            chasis: 'Redbull',
            suspension: 'Redbull',
            drag: 0.22,
            drs: 25,
            topSpeed: 337,
            downforce: 56,
        },
        {
            engine: 'Mercedes',
            chasis: 'Aston Martin',
            suspension: 'Mercedes',
            drag: 0.34,
            drs: 9,
            topSpeed: 330,
            downforce: 50,
        },
    ];
    const minHeap = MinHeap.heapify(arr);
    // arr.forEach((num) => minHeap.push(num));

    const maxHeap = new MaxHeap();
    arr.forEach((num) => maxHeap.push(num));

    const minPriorityQueue = new MinPriorityQueue((a) => a.topSpeed);
    carArr.forEach((car) => minPriorityQueue.push(car));
    const maxPriorityQueue = MaxPriorityQueue.fromArray(
        carArr,
        (a) => a.topSpeed
    );

    console.log(minHeap.top());
    console.log(maxHeap.top());
    console.log(
        'minPriorityQueue',
        minPriorityQueue.front(),
        minPriorityQueue.back()
        // minPriorityQueue
    );
    console.log(
        'maxPriorityQueue',
        maxPriorityQueue.front(),
        maxPriorityQueue.back()
    );
};

console.log(dijkstra());
