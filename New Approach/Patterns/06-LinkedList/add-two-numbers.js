/**
 * Time Complexity of this algorithm is O(max(l1,l2))
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
const addTwoNumbers = (l1, l2) => {
    let tail = new ListNode();
    let sentinel = tail;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        const unitDigit = sum % 10;
        carry = Math.floor(sum / 10);

        // add the sum value to the linked list
        tail.next = new ListNode(unitDigit);
        // traversing the linked list
        tail = tail.next;

        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    return sentinel.next;
};
