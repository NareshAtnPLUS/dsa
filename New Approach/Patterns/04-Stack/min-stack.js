class MinStack {
    mainStack = [];
    minStack = [];
    constructor() {}
    /**
     *
     * @param {number[]} stack
     * @returns
     */
    _isEmpty(stack) {
        return stack.length === 0;
    }
    /**
     *
     * @param {number} val
     */
    push(val) {
        this.mainStack.push(val);
        const minValue = Math.min(
            val,
            this._isEmpty(this.minStack) ? val : this.minStack.at(-1)
        );
        this.minStack.push(minValue);
    }
    pop() {
        this.minStack.pop();
        this.mainStack.pop();
    }
    top() {
        return this.mainStack.at(-1);
    }
    getMin() {
        return this.minStack.at(-1);
    }
}
