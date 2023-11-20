/**
 *
 * @param {ListNode} head
 * @param {number} n
 */
const removeNthFromEnd = (head, n) => {
    const length = getNthFromStart(head, n);
    if (length < 0) {
        return head.next;
    }
    const current = traverse(head, length);

    current.next = current.next.next;
    return head;
};
/**
 *
 * @param {ListNode} current
 * @param {*} n
 */
const getNthFromStart = (current, n) => {
    let length = 0;
    while (current) {
        current = current.next;
        length++;
    }
    return length - n - 1;
};
/**
 *
 * @param {ListNode} current
 * @param {*} length
 */
const traverse = (current, length) => {
    while (length) {
        current = current.next;
        length--;
    }
    return current;
};
