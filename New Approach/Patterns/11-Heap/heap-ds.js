class Heap {
    heap = [];
    constructor() {
        this.heap.push(0);
    }
    getHeap() {
        return this.heap;
    }
    getMin() {
        return this.heap[1];
    }
    parentIdx(idx) {
        return Math.floor(idx / 2);
    }
    leftChildIdx(idx) {
        return 2 * idx;
    }
    rightChildIdx(idx) {
        return 2 * idx + 1;
    }
    /**
     *
     * @param {number} val
     */
    push(val) {
        this.heap.push(val);
        let curr_idx = this.heap.length - 1;
        /**
         * keep percolating the values till the current value is
         * lesser than its parents.
         *
         * change the comparison symbol here to convert max heap to min heap
         */
        while (
            curr_idx > 1 &&
            this.heap[curr_idx] < this.heap[this.parentIdx(curr_idx)]
        ) {
            const parent_idx = this.parentIdx(curr_idx);

            // swapping the current node with the parent node
            const temp = this.heap[curr_idx];
            this.heap[curr_idx] = this.heap[parent_idx];
            this.heap[parent_idx] = temp;

            // updating the curr_index to parent index to percolate up
            curr_idx = parent_idx;
        }
    }
    pop() {
        if (this.heap.length === 1) {
            return -1;
        }
        if (this.heap.length === 2) {
            return this.heap.pop();
        }
        // saving the result to result variable because we are going to
        // remove the element from the heap.
        let res = this.heap[1];
        // we are assigning the last value in the heap to the root of the
        // heap
        this.heap[1] = this.heap.pop();
        // set curr_idx to 1 which is the pointer at root node
        let curr_idx = 1;
        /**
         * traverse through the heap till there is left child;
         * since its is impossible not to have left child,it will not
         * satisfy the complete binary tree property
         */
        while (2 * curr_idx < this.heap.length) {
            const right_child_idx = this.rightChildIdx(curr_idx);
            const left_child_idx = this.leftChildIdx(curr_idx);
            const right_child = this.heap[right_child_idx];
            const left_child = this.heap[left_child_idx];
            const curr_node = this.heap[curr_idx];
            /**
             *  if the right child index is within the bounds and
             * right child is lesser than the left child
             * and curr_node is greater than the right child
             * then swap with the right child
             */
            if (
                right_child_idx < this.heap.length &&
                right_child < left_child &&
                curr_node > right_child
            ) {
                this.heap[curr_idx] = right_child;
                this.heap[right_child_idx] = curr_node;
                curr_idx = right_child_idx;
            } else if (curr_node > left_child) {
                this.heap[curr_idx] = left_child;
                this.heap[left_child_idx] = curr_node;
                curr_idx = left_child_idx;
            } else {
                break;
            }
        }
        return res;
    }
}

const minHeap = new Heap();

minHeap.push(14);
minHeap.push(19);
minHeap.push(16);
minHeap.push(21);
minHeap.push(26);
minHeap.push(19);
minHeap.push(68);
minHeap.push(65);
minHeap.push(30);

console.log(minHeap.getHeap());
console.log(minHeap.getMin());

minHeap.push(10);

console.log(minHeap.getHeap());
console.log(minHeap.getMin());
console.log('removing');
console.log(minHeap.pop());
console.log(minHeap.getHeap());
console.log(minHeap.getMin());

console.log(minHeap.pop());
console.log(minHeap.getHeap());
console.log(minHeap.getMin());

console.log(minHeap.pop());
console.log(minHeap.getHeap());
console.log(minHeap.getMin());
