class LRUCache {
    /**
     *
     * @param {number} capacity capacity of the Least Recently Used Cache
     *
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = {};
        this.tail = {};

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _removeLastUsed() {
        const [key, next, prev] = [
            this.head.next.key,
            this.head.next.next,
            this.head,
        ];

        this.map.delete(key);
        this.head.next = next;
        this.head.next.prev = prev;
    }

    _moveToFront(node) {
        const [prev, next] = [this.tail.prev, this.tail];

        this.tail.prev.next = node;
        this._connectNode(node, { prev, next });
        this.tail.prev = node;
    }

    _connectNode(node, top) {
        node.prev = top.prev;
        node.next = top.next;
    }
    _disconnectNode(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    get(key) {
        const hasKey = this.map.has(key);
        if (!hasKey) return -1;

        const node = this.map.get(key);

        this._disconnectNode(node);
        this._moveToFront(node);

        return node.value;
    }
    put(key, value) {
        const hasKey = this.get(key) !== -1;
        const isAtCapacity = this.map.size === this.capacity;

        if (hasKey) return (this.tail.prev.value = value);
        if (isAtCapacity) this._removeLastUsed();

        const node = { key, value };
        this.map.set(key, node);
        this._moveToFront(node);
    }
}
