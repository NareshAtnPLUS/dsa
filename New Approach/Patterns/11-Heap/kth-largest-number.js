const { MinPriorityQueue } = require('datastructures-js');

class KthLargest {
    minHeap = new MinPriorityQueue();
    size = 0;
    /**
     *
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        nums.forEach((num) => this.minHeap.enqueue(num));
        this.size = k;
        while (this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }
    getHeap() {
        return this.minHeap.toArray();
    }
    /**
     *
     * @param {number} val
     */
    add(val) {
        // console.log(`pushing ${val}`);
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.size) {
            // console.log('removing', this.minHeap.top());
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
const heap = new KthLargest(3, [4, 5, 8, 2]);
console.log(heap.getHeap());
console.log(heap.add(3));
console.log(heap.getHeap());
console.log(heap.add(5));
console.log(heap.getHeap());
console.log(heap.add(10));
console.log(heap.getHeap());
console.log(heap.add(9));
console.log(heap.getHeap());
console.log(heap.add(4));
console.log(heap.getHeap());
