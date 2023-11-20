const { ListNode } = require('./index');
/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
const mergeTwoList = (list1, list2) => {
    const dummy = new ListNode();
    let tail = dummy;
    /**
     * iterating through both linked lists till either one of the list are empty
     * checking for the lesser value
     * append the lesser node to the tail
     */
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            // list1 is lesser or equal to list2
            tail.next = list1;
            list1 = list1.next;
        } else if (list1.val > list2.val) {
            // list2 is less than list1
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    /**
     * finally attach the remaining nodes to the tail
     */
    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
};
