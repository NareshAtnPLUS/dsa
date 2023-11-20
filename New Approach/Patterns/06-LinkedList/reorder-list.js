const { ListNode } = require('./index');
/**
 *
 * @param {ListNode} head
 */
const reorderList = function (head) {
    /**
     * find the middle and get second half
     */
    let [slow, fast] = [head, head.next];
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    /**
     * @var {ListNode}
     */
    let secondList = slow.next;
    // getting rid of second half by cutting of the link
    slow.next = null;

    /**
     * reverse the second half
     */
    let previous = null;
    while (secondList) {
        const _next = secondList.next;
        secondList.next = previous;
        previous = secondList;
        secondList = _next;
    }

    /**
     * merge the two linked lists
     */
    secondList = previous;
    let first = head;
    while (secondList) {
        // store the next nodes in a temporary variables
        let [next1, next2] = [first.next, secondList.next];
        // connect the first link to second list
        first.next = secondList;
        // connect the second
        secondList.next = next1;

        first = next1;
        secondList = next2;
    }
};
