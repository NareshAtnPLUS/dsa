/**
 * Definition for singly-linked list.
 ***/
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
    let [prev, current, _next] = [null, head, null];

    /**
     * iterate through the linked list till the current is not null; if the current is null
     * there is no linked list beyound that node.
     */
    while (current) {
        _next = current.next;
        /**
         * point the current next to previous;
         * before making this update we need remember the next node
         * to make the next node as current node for the iterative process
         */
        current.next = prev; // reversing the link

        /**
         * swapping previous pointer to current;
         * and current pointer to next
         */
        prev = current;
        current = _next;
    }
    return head;
};
