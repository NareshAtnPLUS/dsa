/**
 * Using slow and fast pointers technique.
 * if fast and fast.next is not available then it is not a cycle,
 * if it is available, then slow and fast pointer will meet somewhere.
 * if it meet return true
 * at the end of the loop return false
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * @param {ListNode} head
 * @returns
 */
const hasCycle = function (head) {
    let [fast, slow] = [head, head];
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};
