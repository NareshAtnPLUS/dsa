/**
 *
 * @param {Node} head
 */
const copyRandomList = (head) => {
    if (!head) {
        return null;
    }
    cloneNodes(head);
    connectRandomNode(head);
    const deepCopy = connectNode(head);
    return deepCopy;
};
const cloneNodes = (current) => {
    /**
     * cloning the existing nodes in the structure of consecutive pairs
     * 7-> 7* -> 13-> 13* ....
     */
    while (current) {
        const node = new Node(current.val);
        node.next = current.next;
        current.next = node;
        current = node.next;
    }
    return current;
};
/**
 * connecting cloned random nodes, by pointing the next of the current random node,
 * which is the newly cloned node
 * @param {Node} current
 */
const connectRandomNode = (current) => {
    while (current) {
        const randomNode = current.random;
        current.next.random = randomNode?.next || null;
        current = current.next.next;
    }
};
/**
 * reconnecting the newly cloned nodes and previously connected nodes
 * @param {Node} head
 * @returns
 */
const connectNode = (head) => {
    let [prev, current, next] = [head, head.next, head.next];
    while (prev) {
        prev.next = prev.next.next;
        current.next = current?.next?.next || null;
        prev = prev.next;
        current = current.next;
    }
    return next;
};
