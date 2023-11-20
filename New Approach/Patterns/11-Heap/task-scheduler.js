const { MaxPriorityQueue } = require('datastructures-js');

/**
 *
 * @param {string[]} tasks
 * @param {number} n
 */
const taskScheduler = (tasks, idleTime) => {
    const maxHeap = new MaxPriorityQueue(),
        queue = [],
        charFreqMap = {};
    let time = 0;
    for (let task of tasks) {
        if (!(task in charFreqMap)) {
            charFreqMap[task] = 0;
        }
        charFreqMap[task] += 1;
    }
    for (let char in charFreqMap) {
        const frequency = charFreqMap[char];
        maxHeap.enqueue(frequency);
    }
    // process the tasks when there is something either
    // in queue or max heap
    while (maxHeap.size() > 0 || queue.length > 0) {
        time += 1;
        if (maxHeap.size() > 0) {
            // when we are processing the task we will
            // reduce the frequency of the task.
            const cnt = maxHeap.dequeue() - 1;
            if (cnt) {
                queue.push({ cnt, time: time + idleTime });
            }
        }
        const curr_time = queue.length > 0 ? queue[0].time : null;
        // if the curr time matches with time
        // then we can process the task
        // at the next time
        if (curr_time === time) {
            const { cnt } = queue.shift();
            // push it to heap, so it will get processed
            // later.
            maxHeap.enqueue(cnt);
        }
    }
    return time;
};
console.log(
    taskScheduler(
        ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
        2
    )
);
